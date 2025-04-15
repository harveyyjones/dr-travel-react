import { db } from '../services/firebase';

describe('Firebase Connectivity', () => {
  it('should connect to Firestore', async () => {
    try {
      // Try to get a non-existent document
      const docRef = db.collection('test').doc('test');
      await docRef.get();
      expect(true).toBe(true);
    } catch (error) {
      // If we get here, it means we couldn't connect to Firestore
      expect(false).toBe(true);
    }
  });
}); 