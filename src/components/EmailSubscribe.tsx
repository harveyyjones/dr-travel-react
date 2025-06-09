import React, { useState, FormEvent, ChangeEvent } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import './EmailSubscribe.css';

interface SubscriberData {
  email: string;
  name: string;
  timestamp: Date;
}

const EmailSubscribe: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Add to Firestore
      const subscriberData: SubscriberData = {
        email,
        name,
        timestamp: new Date()
      };
      
      await addDoc(collection(db, 'email_subscribers'), subscriberData);
      
      setMessage('Thanks for subscribing!');
      setEmail('');
      setName('');
    } catch (error) {
      setMessage('Something went wrong, please try again.');
    }
  };

  return (
    <div className="email-subscribe">
      <h2>Stay Updated</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default EmailSubscribe; 