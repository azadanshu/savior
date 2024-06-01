import { Button } from '@chakra-ui/react';
import Navbar from './components/navbar';
import Content from './components/cont1';
// import { Content } from '';

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Content></Content>
    </main>
  );
}