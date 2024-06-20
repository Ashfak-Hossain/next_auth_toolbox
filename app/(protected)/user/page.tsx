'use client';

import React, { useEffect, useState } from 'react';

import { Card, CardContent, CardHeader } from '@/components/ui/card';

const UserPage = () => {
  const [userAgentData, setUserAgentData] = useState<UserAgentData | undefined>(
    undefined
  );
  const [geoData, setGeoData] = useState<GeoData>();

  useEffect(() => {
    async function fetchUserAgentData() {
      try {
        const response = await fetch('/api/user-agent');
        const data = await response.json();
        setUserAgentData(data);
      } catch (error) {
        console.error('Error fetching user agent data:', error);
      }
    }

    async function fetchGeoData() {
      try {
        const response = await fetch('/api/geo');
        const data = await response.json();
        setGeoData(data);
      } catch (error) {
        console.error('Error fetching geo data:', error);
      }
    }

    fetchUserAgentData();
    fetchGeoData();
  }, []);

  return (
    <>
      <Card className="w-[600px] shadow-md">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">
            Ω User Agent Information
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* OS */}
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">OS</p>
            <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
              {userAgentData?.os.name} {userAgentData?.os.version}
            </p>
          </div>
          {/* Device */}
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Device</p>
            <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
              {userAgentData?.device.vendor} {userAgentData?.device.model}
            </p>
          </div>
          {/* Browser */}
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Email</p>
            <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
              {userAgentData?.browser.name} {userAgentData?.browser.version}
            </p>
          </div>
          {/* IP Address */}
          {geoData && (
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <p className="text-sm font-medium">Address</p>
              <p className="truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                {geoData?.city} {geoData?.country}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default UserPage;
