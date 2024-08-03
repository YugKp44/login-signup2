const testFetch = async () => {
   try {
      const response = await fetch('http://localhost:8000/auth/signup', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            username: 'testuser',
            email: 'test@example.com',
            password: 'testpassword',
         }),
      });

      if (!response.ok) {
         const errorText = await response.text();
         throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log('Test signup successful:', result);
   } catch (error) {
      console.error('Test Error during signup:', error);
   }
};

testFetch();  // Call this function in useEffect or somewhere else for testing
