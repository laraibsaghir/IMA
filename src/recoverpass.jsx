import { TextInput, Checkbox, Button, Group, Box, SimpleGrid, Center , Title, Container, Paper, Anchor, Text, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';

function ForgetPassword() {


  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const [errorMessage1, setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');
  const [errorMessage4, setErrorMessage4] = useState('');
  const [errorMessage5, setErrorMessage5] = useState('');
  const [errorMessage6, setErrorMessage6] = useState('');
  
  
  useEffect(() => {
    
    if(errorMessage4){
      if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
        setErrorMessage4('');
      }
    }
    if(errorMessage5){
      if (password == confirmPassword) {
        setErrorMessage5('');
      }
    }
    
  }, [ password, confirmPassword ]);


 

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  

  function handleSubmit(event) {
    event.preventDefault();
    
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      setErrorMessage4('Invalid password');
      setIsLoggedIn(false);
      
    }
    if (password !== confirmPassword) {
      setErrorMessage5('Passwords do not match');
      setIsLoggedIn(false);
      
    }
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password) && (password == confirmPassword)){
    setIsLoggedIn(true);
    }
    return;
    // Add code here to submit the form data to your backend server or perform other actions.
  }
  
  const form = useForm({
  });
  
  return (
    
    <Box  px={100}  size={420}>
      <Title
        align="center" 
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Forget Password
      </Title>
    
     
    <Center>
    <Paper  withBorder shadow="md" p={30} mt={10} radius="md" style={{ width: '40%', minWidth: '40%'}} >
      <form  onSubmit={handleSubmit}  >
        <TextInput
          withAsterisk
          label="New Password"
          placeholder="password"
          value={password} onChange={handlePasswordChange}
          mb={10}
        />
        {errorMessage4 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage4}</p>}
        <TextInput
          withAsterisk
          label="Confirm Password"
          placeholder="confirm password"
          value={confirmPassword} onChange={handleConfirmPasswordChange}
          mb={10}
        />
        {errorMessage5 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage5}</p>}
         
        
        <Group position="center" mt="md" >
          <Button type="submit" fullWidth style={{ backgroundColor: '#4E8480'}}>Submit</Button>
        </Group>
        {isLoggedIn && <p  style={{ color: 'red', fontSize: '13px', textAlign: 'center' }}>Password Saved!</p>}
      </form>
      </Paper>
      </Center>
   
    </Box>
   
  );
}

export default ForgetPassword