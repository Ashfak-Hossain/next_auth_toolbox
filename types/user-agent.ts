interface OS {
  name: string;
  version: string;
}

interface CPU {
  architecture: string;
}

interface Browser {
  name: string;
  version: string;
  major: string;
}

interface Engine {
  name: string;
  version: string;
}

interface Device {
  model: string;
  type: string;
  vendor: string;
}

interface UserAgentData {
  os: OS;
  cpu: CPU;
  isBot: boolean;
  ua: string;
  browser: Browser;
  device: Device;
  engine: Engine;
}

interface GeoData {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  postal: string;
  timezone: string;
}
