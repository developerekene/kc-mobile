import { signInWithEmailAndPassword, signOut, initializeAuth, sendEmailVerification, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { logoutUser, setUser } from "../slice/user";
import { store } from "../store";
import Toast from 'react-native-toast-message';
import { NotificationItem, UserType } from "../../utils/TypesAndInterface/TypesAndInterface";
import { addCourse } from "../slice/coursesSlice";



const getCurrentDateTime = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(
        date
    ).padStart(2, "0")}`;
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
        minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return {
        year,
        month,
        date,
        time: formattedTime,
        formattedDateTime: `${formattedDate} ${formattedTime}`,
    };
};

interface User {
    uid: string;
    name: string;
    email: string;
    droidId: string;
}

const registrationTime = new Date();

export class AuthService {
    async handleUserRegistration(
        userData: any,
    ) {
        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                userData.email,
                userData.password
            );
            const user = res.user;
            const currentDateTime = getCurrentDateTime();

            await updateProfile(user, {
                displayName: `${userData.firstName} ${userData.lastName}`,
            });

            const userDocRef = doc(collection(db, "droidaccount"), user.uid);

            const droidAccount = {
                user: {
                    primaryInformation: {
                        firstName: userData.firstName,
                        lastName: userData.lastName,
                        initials:
                            `${userData.firstName[0]}${userData.lastName[0]}`.toUpperCase(),
                        userType: "member",
                        uniqueId: user.uid,
                        email: userData.email,
                        agreeToPolicy: true,
                        isLoggedIn: true,
                        // agreedToTerms: true,
                        middleName: "",
                    },
                    location: {
                        // locationFromDevice: locationData,
                        currentdateTime: currentDateTime,
                    },
                },
            };

            await setDoc(userDocRef, droidAccount);
            const userSnapshot = await getDoc(userDocRef);

            if (userSnapshot.exists()) {
                const fetchedUserData = userSnapshot.data();
                const primaryInformation = fetchedUserData.user.primaryInformation;

                store.dispatch(setUser({ ...primaryInformation }));

                await sendEmailVerification(user);
                await signOut(auth);
                Toast.show({
                    type: 'success', // Uses the library's predefined success styling (which is usually green)
                    text1: 'Login Successful', // A title for the toast
                    text2: "Your D'roid Account has been successfully created",
                });

                return { success: true };
            } else {
                Toast.show({
                    type: 'error', // Uses the library's predefined error styling (usually red)
                    text1: 'Failed', // A concise title
                    text2: "User Information does not exist 🚫", // The detailed error message
                });
                return null;
            }
        } catch (error: any) {
            console.error("Error during registration:", error);
            Toast.show({
                type: 'error', // Uses the library's predefined error styling (usually red)
                text1: 'Failed', // A concise title
                text2: error.message || "Error creating your D'roid Account 🚫", // The detailed error message
            });
            return null;
        }
    }
    async handleUserLogin(email: string, password: string) {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const userDocRef = doc(
                collection(db, "droidaccount"),
                userCredential.user.uid
            );
            const userDocSnap = await getDoc(userDocRef);
            const updatedData = userDocSnap.data();

            if (userDocSnap.exists()) {
                const fetchedUserData = userDocSnap.data();
                const primaryInformation = fetchedUserData.user?.primaryInformation;
                const userForm = fetchedUserData.user?.userForms;
                const userType = primaryInformation?.userType;

                const isUserActuallyStaff =
                    userType?.toLowerCase() === "staff" ||
                    userType?.toLowerCase() === "admin";

                const schedleData = fetchedUserData?.schedules?.mySchedles || [];;
                const progress = fetchedUserData?.user?.onboard?.progress || {};
                const firestoreNotificationsRaw =
                    fetchedUserData.user?.onboard?.notifications || [];
                // console.log(firestoreNotifications)
                const firestoreNotifications: NotificationItem[] =
                    firestoreNotificationsRaw.map((n: any, index: number) => ({
                        id: n.id ?? `firebase-${index}`,
                        title: n.title ?? "Notification",
                        message: n.message ?? "",
                        date: n.date,
                        time: n.time,
                        isRead: n.isRead ?? false,
                    }));

                // store.dispatch(setTier(progress));;
                // store.dispatch(setNotifications(firestoreNotifications));
                // store.dispatch(persistNotifications(firestoreNotifications));
                // store.dispatch(setEvents(schedleData))
                store.dispatch(
                    setUser({ ...primaryInformation, role: primaryInformation.role })
                );

                Toast.show({
                    type: 'success',
                    text1: 'Login Successful',
                    text2: 'We have successfully logged you into your account.',
                });

                return userCredential;
            } else {
                throw new Error("User information does not exist in database.");
            }
        } catch (err: any) {
            Toast.show({
                type: 'error',
                text1: 'Login Failed',
                text2: err.message || "Login failed",
            });
            throw err;
        }
    }
    async handleUserSignout(): Promise<void> {
        await signOut(auth)
            .then(() => {
                store.dispatch(logoutUser());

                // Success Toast using the react-native-toast-message style
                Toast.show({
                    type: 'success',
                    text1: 'Sign Out Successful',
                    text2: `You have successfully signed out of your D'roid Account`,
                });
            })
            .catch((err) => {
                // Error Toast using the react-native-toast-message style
                Toast.show({
                    type: 'error',
                    text1: 'Sign Out Failed',
                    text2: err.message || `An error occurred while signing out.`,
                });
            });
    }
    async updatePrimaryInformation(formData: any) {
        try {
            const currentUser = auth.currentUser;
            if (!currentUser) {
                throw new Error("No authenticated user found.");
            }

            const userDocRef = doc(db, "droidaccount", currentUser.uid);
            const userSnapshot = await getDoc(userDocRef);

            if (!userSnapshot.exists()) {
                throw new Error("User profile not found in the database.");
            }

            const existingData = userSnapshot.data();

            // Build update payload while preserving Firestore structure
            const updatedPrimaryInfo = {
                ...existingData.user.primaryInformation,
                ...formData,
                initials: `${formData.firstName?.[0] || ""}${formData.lastName?.[0] || ""}`.toUpperCase(),
                updatedAt: new Date().toISOString(),
            };

            // Update Firestore
            await updateDoc(userDocRef, {
                "user.primaryInformation": updatedPrimaryInfo,
            });
            store.dispatch(
                setUser({ ...updatedPrimaryInfo })
            );

            Toast.show({
                type: "success",
                text1: "Profile Updated",
                text2: "Your personal details have been successfully saved.",
            });

            return { success: true, data: updatedPrimaryInfo };

        } catch (error: any) {
            console.error("Error updating profile:", error);

            Toast.show({
                type: "error",
                text1: "Update Failed",
                text2: error.message || "Unable to update profile information.",
            });

            return { success: false, error: error.message };
        }
    }
    async handleForgotPassword(email: string) {
        try {
            if (!email || email.trim() === "") {
                Toast.show({
                    type: "error",
                    text1: "Missing Email",
                    text2: "Please enter your email address.",
                });
                return;
            }

            await sendPasswordResetEmail(auth, email);

            Toast.show({
                type: "success",
                text1: "Password Reset Sent",
                text2: "Check your email and spam folder for reset instructions.",
            });

            return true;
        } catch (error: any) {
            console.error("Forgot Password Error:", error);

            let message = "Something went wrong.";

            if (error.code === "auth/user-not-found") {
                message = "No account found with this email.";
            }
            if (error.code === "auth/invalid-email") {
                message = "Email format is invalid.";
            }

            Toast.show({
                type: "error",
                text1: "Reset Failed",
                text2: message,
            });

            return null;
        }
    }
    async updateUserForms(userFormObject: any) {
        try {
            const currentUser = auth.currentUser;

            if (!currentUser) {
                throw new Error("No authenticated user found.");
            }

            const userDocRef = doc(db, "droidaccount", currentUser.uid);
            const userSnapshot = await getDoc(userDocRef);

            if (!userSnapshot.exists()) {
                throw new Error("User profile not found in the database.");
            }

            const existingData = userSnapshot.data();

            // Ensure userforms is an array
            const existingForms =
                existingData?.user?.onboard?.userforms || [];

            // Build new form entry
            const newFormEntry = {
                ...userFormObject,
                createdAt: new Date().toISOString(),
            };

            // Append new form
            const updatedForms = [...existingForms, newFormEntry];

            // 🔄 Update Firestore
            await updateDoc(userDocRef, {
                "user.onboard.userForms": updatedForms,
            });

            // Optional: dispatch to redux if needed
            // store.dispatch(setUserForms(updatedForms));

            Toast.show({
                type: "success",
                text1: "Form Saved",
                text2: "Your form has been successfully submitted.",
            });

            return { success: true, data: updatedForms };

        } catch (error: any) {
            console.error("Error updating user forms:", error);

            Toast.show({
                type: "error",
                text1: "Save Failed",
                text2: error.message || "Unable to save your form.",
            });

            return { success: false, error: error.message };
        }
    }
    async pullCoursesFromFirebase() {
        try {
            // Reference the public courses document
            const publicDocRef = doc(db, "courses", "public");
            const docSnap = await getDoc(publicDocRef);

            if (!docSnap.exists()) {
                console.warn("No courses found in the database");
                return [];
            }

            const data = docSnap.data();

            // Access the public courses array safely
            const allCourses = data?.all?.courses ?? [];
            store.dispatch(addCourse(allCourses))

            // console.log("All courses array:", allCourses);
            return allCourses;
        } catch (error) {
            console.error("Error pulling courses:", error);
            return [];
        }
    }
    async pushCourseToFirebase(newCourse: any) {
        try {
            if (!newCourse || typeof newCourse !== "object") {
                throw new Error("Valid course object is required");
            }

            // Single public document
            const publicDocRef = doc(db, "courses", "public");

            // Merge with existing document, append to all.courses
            await setDoc(
                publicDocRef,
                {
                    all: {
                        courses: arrayUnion(newCourse)
                    }
                },
                { merge: true } // preserves existing data
            );

            // console.log("Course successfully added to public all.courses!");
            return true;
        } catch (error) {
            console.error("Error pushing course to Firebase:", error);
            return false;
        }
    }
}

export const authService = new AuthService();