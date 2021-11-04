import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
};

let app: FirebaseApp;
let analytics: Analytics;

if (typeof window !== 'undefined' && !!getApps().length) {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export { analytics };
