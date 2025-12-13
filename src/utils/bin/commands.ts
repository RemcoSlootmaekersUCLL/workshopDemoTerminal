// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Hier zijn alle beschikbare commando's:
\n${c}\n
[tab]: autocomplete.
[ctrl+l]/clear: clear terminal.\n
`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `configInit.sh
config
data
bin
sbin
  `;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Je hebt de easter egg gevonden! :)`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ██████╗       ██████╗  ██████╗ ██╗   ██╗████████╗
██╔════╝       ██╔══██╗██╔═══██╗██║   ██║╚══██╔══╝
██║  ███╗█████╗██████╔╝██║   ██║██║   ██║   ██║   
██║   ██║╚════╝██╔══██╗██║   ██║██║   ██║   ██║   
╚██████╔╝      ██║  ██║╚██████╔╝╚██████╔╝   ██║   
 ╚═════╝       ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   

Type 'help' om de lijst van beschikbare commando's te zien.
`;
};
