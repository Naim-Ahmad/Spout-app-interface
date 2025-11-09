import { useAccount, useSwitchChain } from "wagmi";
import { base } from "@/lib/chainconfigs/base";
export const useNetworkSwitch = () => {
  const { chainId } = useAccount();
  const { switchChainAsync } = useSwitchChain();

  const checkAndSwitchNetwork = async () => {
    if (!chainId) {
      throw new Error("No chain detected. Please connect your wallet.");
    }

    if (chainId !== base.id) {
      try {
        await switchChainAsync({ chainId: base.id });
      } catch (err) {
        console.error("Error switching network:", err);
        throw new Error("Failed to switch to Base Sepolia network");
      }
    }
  };

  return {
    checkAndSwitchNetwork,
    isBase: chainId === base.id,
    currentChain: chainId,
  };
};
