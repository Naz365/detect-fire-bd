import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  addDoc, 
  deleteDoc, 
  updateDoc, 
  query, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBY3flpzmhcr7tGLqldJlV114aHPB0MkHk",
  authDomain: "detect-fire-bd.firebaseapp.com",
  projectId: "detect-fire-bd",
  storageBucket: "detect-fire-bd.firebasestorage.app",
  messagingSenderId: "519583446978",
  appId: "1:519583446978:web:4ec92069b3dec02b12c85b",
  measurementId: "G-MKH5BDLV8X"
};

// Initialize Firebase App
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

// ImgBB API Key for 100% Free Unlimited Image Hosting
export const IMGBB_API_KEY = "eb0e69bdd08e889d891aafbca2efef44";

/**
 * Upload an image file to ImgBB and return direct image URL
 */
export async function uploadImageToImgBB(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('key', IMGBB_API_KEY);

  const res = await fetch('https://api.imgbb.com/1/upload', {
    method: 'POST',
    body: formData
  });

  const data = await res.json();
  if (data && data.success && data.data && data.data.url) {
    return data.data.url;
  }
  throw new Error(data?.error?.message || 'ইমেজ আপলোড করতে সমস্যা হয়েছে');
}
