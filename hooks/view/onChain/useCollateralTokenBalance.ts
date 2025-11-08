import { useContractAddress } from "@/lib/addresses";
import { useTokenBalance } from "./useTokenBalance";
import { useAccount } from "wagmi";

export function useCollateralTokenBalance() {
  const collateral = useContractAddress("collateral") as `0x${string}`;
  const { address } = useAccount();
  return useTokenBalance(collateral, (address ?? null) as any);
}

