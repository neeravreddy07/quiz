import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "@/lib/firebase";

export const db = getFirestore(app);
export { doc, setDoc };
