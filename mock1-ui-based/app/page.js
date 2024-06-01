import { Button } from '@chakra-ui/react';
import Navbar from './components/navbar';
import Content from './components/cont1';
import Cards from './components/cards';
import Footer from './components/footer';
import Faq from './components/faq';


export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Content></Content>
      <Cards></Cards>
      <Faq></Faq>
      <Footer></Footer>
    </main>
  );
}