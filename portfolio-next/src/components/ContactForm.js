import React, { useState } from 'react';
import { Button, CheckIcon, Group, Space, TextInput, Textarea } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { MdAlternateEmail } from 'react-icons/md';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = JSON.stringify({name, email, message})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        notifications.show({
          title: 'Your message was sent! 📬',
          message: 'Thanks for reaching out! I will anwer as soon as possible.',
          icon: <CheckIcon/>
        });

        setName('');
        setEmail('');
        setMessage('');
      } else {
        notifications.show({
          title: 'There was an error submitting',
          message: data,
          color: 'teal',
        });
      }

    } catch (error) {
      notifications.show({
        title: 'There was an error submitting',
        message: data,
        color: 'teal',
      });
    }

    // Reset form fields

  };

  return (
    <form onSubmit={handleSubmit}>
        <TextInput
            required
            label="Your Name"
            placeholder=''
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
        />
        <TextInput
            required
            type="email"
            label="Email"
            value={email}
            placeholder="Your email" 
            icon={<MdAlternateEmail size="0.8rem" />}
            onChange={(event) => setEmail(event.currentTarget.value)}
        />
        <Textarea
            required
            label="Message"
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
        />
      <Space h={25}/>
        <Group position="right">
            <Button type="submit" variant="filled">
                Send
            </Button>
        </Group>
    </form>
  );
};

export default ContactForm;
