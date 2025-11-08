"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useVault } from "@/hooks/writes/onChain/useVault";
import { useAccount } from "wagmi";
import { Loader2, TrendingUp, TrendingDown } from "lucide-react";

export function VaultPositions() {
  const { userVaultIds, vault, isVaultIdsLoading, isVaultLoading, selectedVaultId, setSelectedVaultId } = useVault();
  const { address } = useAccount();

  if (!address) {
    return (
      <Card className="border border-[#004040]/15 bg-white rounded-none shadow-sm">
        <CardContent className="p-8 text-center">
          <p className="text-slate-600">Please connect your wallet to view your vault positions</p>
        </CardContent>
      </Card>
    );
  }

  if (isVaultIdsLoading || isVaultLoading) {
    return (
      <Card className="border border-[#004040]/15 bg-white rounded-none shadow-sm">
        <CardContent className="p-8 text-center">
          <Loader2 className="h-6 w-6 animate-spin text-[#004040] mx-auto" />
          <p className="text-slate-600 mt-4">Loading vault positions...</p>
        </CardContent>
      </Card>
    );
  }

  if (!userVaultIds || userVaultIds.length === 0) {
    return (
      <Card className="border border-[#004040]/15 bg-white rounded-none shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-[#004040]">Your Vault Positions</CardTitle>
          <CardDescription>
            View your current vault deposits and positions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 text-center border border-slate-200 rounded-lg bg-slate-50">
            <p className="text-slate-600">No active vaults</p>
            <p className="text-sm text-slate-500 mt-2">
              Create a vault and deposit collateral to get started
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const vaultCollateralFormatted = vault ? (Number(vault.ink) / 1e18).toFixed(6) : "0.00";
  const vaultDebtFormatted = vault ? (Number(vault.art) / 1e18).toFixed(6) : "0.00";
  const hasDebt = vault && Number(vault.art) > 0;

  return (
    <Card className="border border-[#004040]/15 bg-white rounded-none shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-[#004040]">Your Vault Positions</CardTitle>
        <CardDescription>
          View your current vault deposits and positions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Vault Position Card */}
        <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                Vault #{selectedVaultId?.toString()}
                {vault && <Badge variant="outline" className="text-xs">{vault.ilk}</Badge>}
              </h3>
              <p className="text-sm text-slate-600 mt-1">Collateral & Debt Position</p>
            </div>
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              Active
            </Badge>
          </div>
          
          <div className="space-y-3 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Collateral (TCOL)</span>
              <span className="text-lg font-semibold text-[#004040]">{vaultCollateralFormatted}</span>
            </div>
            
            {hasDebt && (
              <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                <span className="text-sm text-slate-600">Debt</span>
                <span className="text-lg font-semibold text-red-600 flex items-center gap-1">
                  <TrendingDown className="h-4 w-4" />
                  {vaultDebtFormatted}
                </span>
              </div>
            )}

            {!hasDebt && Number(vaultCollateralFormatted) > 0 && (
              <div className="pt-2 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Your collateral is deposited. You can borrow against it or withdraw when needed.
                </p>
              </div>
            )}

            {Number(vaultCollateralFormatted) === 0 && !hasDebt && (
              <div className="pt-2 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Vault created. Deposit collateral to get started.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Multiple Vaults Notice */}
        {userVaultIds.length > 1 && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-700">
              You have {userVaultIds.length} vault(s). Currently showing vault #{selectedVaultId?.toString()}.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
