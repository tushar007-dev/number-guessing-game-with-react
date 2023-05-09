import GameOver from "./components/GameOver";
import PlayerOne from "./components/PlayerOne";
import PlayerTwo from "./components/PlayerTwo";
import StartPage from "./components/StartPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<StartPage />}></Route>
        <Route path="playerone" element={<PlayerOne />}></Route>
        <Route path="playertwo" element={<PlayerTwo />}></Route>
        <Route path="gameover" element={<GameOver />}></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
