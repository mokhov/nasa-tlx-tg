import { registerEcho } from './handlers/echo.js';
import { registerHelp } from './handlers/help.js';
import { registerStart } from './handlers/start.js';

export function registerHandlers(bot) {
  registerStart(bot);
  registerHelp(bot);
  registerEcho(bot);
}
