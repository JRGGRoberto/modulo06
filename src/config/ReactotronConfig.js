import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  // if you use Device by USB
  // you need put this configuration
  // const tron = Reactotron.configure({host: '192.168.27.2'})
  // put ip address of device
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
