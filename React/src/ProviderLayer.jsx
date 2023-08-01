import App from "./App";
import DataProvider from "./components/DataProvider";


const ProviderLayer = () => {

    return (
        <DataProvider>
            <App />
        </DataProvider>
    )
}
export default ProviderLayer;