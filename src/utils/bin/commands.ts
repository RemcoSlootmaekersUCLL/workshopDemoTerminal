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
  return `${config.name}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `filename --- owner --- last modified by --- description
systeem.log --- root --- root --- Systeemlogboek van de server
fin_admin.xlsx --- admin --- admin --- Financiële administratie
kernel32.dll --- system --- hacker42 --- Systeemkernelbestand
backup_2025-12-01.zip --- root --- root --- Volledige systeembackup
invoice_2025.pdf --- admin --- admin --- Factuur voor klant
malware.exe --- unknown --- unknown --- Verdacht uitvoerbaar bestand
readme.txt --- user --- user --- Gebruikersnotities
config.sys --- system --- system --- Systeemconfiguratiebestand
`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    dateStyle: 'full',
    timeStyle: 'long',
  });
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
