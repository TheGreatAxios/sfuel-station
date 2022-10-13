import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages';
import Components from './components';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
    [chain.mainnet],
    [
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
  appName: 'sFUEL Station',
  chains
});
 
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

function App() {

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains}
        theme={darkTheme({
            accentColor: 'black',
            accentColorForeground: 'white',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'small',
        })}
      >
            <main>
                <Router>
                    <Components.Navigation />
                    <Routes>
                         <Route path='/' element={ <Pages.LandingPage />} />
                        <Route path='/station' element={ <Pages.StationPage isDeveloper={false} /> } />
                        <Route path='/developers' element={ <Pages.StationPage isDeveloper={true} /> } />
                    </Routes>
                </Router>
            </main>
        </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
