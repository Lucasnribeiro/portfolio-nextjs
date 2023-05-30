import React, { useState } from 'react';
import { Button, Group, Space, TextInput, Textarea } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { MdAlternateEmail } from 'react-icons/md';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your form submission logic here
    // For this example, we'll just display the form data in a notification

    const formData = {
      name: name,
      email: email,
      message: message
    };

    notifications.show({
      title: 'Form Submitted',
      message: JSON.stringify(formData),
      color: 'teal',
    });

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
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
