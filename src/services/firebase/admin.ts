import { initializeApp, cert, getApps, App } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import { getStorage, Storage } from 'firebase-admin/storage';

const privateKey = JSON.parse(process.env.FIREBASE_PRIVATE_KEY);
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

if (!privateKey || !clientEmail || !projectId) {
  console.log(
    `Failed to load Firebase credentials. Follow the instructions in the README to set your Firebase credentials inside environment variables.`
  );
}

let app: App;
let firestore: Firestore;
let storage: Storage;

if (!getApps().length) {
  app = initializeApp({
    credential: cert({
      privateKey: privateKey,
      clientEmail,
      projectId,
    }),
    projectId,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  });
  firestore = getFirestore(app);
  storage = getStorage(app);
}

export { firestore, storage };
