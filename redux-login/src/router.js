import App from "./components/App";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";

const routers = [
  {
    path: "/",
    component: App,
    exact: true
  },
  {
    path: "/signin",
    component: SignIn,
    children: [
      {
        path: "/signin/2",
        component: SignUp
      },
      {
        path: "/signin/1",
        component: SignUp
      }
    ]
  },
  {
    path: "/signup",
    component: SignUp
  },
];
export default routers;
