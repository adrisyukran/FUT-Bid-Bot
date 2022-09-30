import {
  idAbMessageNotificationToggle,
  idAbSoundToggle,
  idCapatchaMp3,
  idDiscordChannelId,
  idDiscordToken,
  idFUTMarketAlertToken,
  idNotificationType,
  idTelegramBotToken,
  idTelegramChatId,
  idTestNotification,
  idWinMp3,
  idFinishMp3,
} from "../../../elementIds.constants";
import { sendNotificationToUser } from "../../../utils/notificationUtil";
import { generateButton } from "../../../utils/uiUtils/generateButton";
import { generateTextInput } from "../../../utils/uiUtils/generateTextInput";
import { generateToggleInput } from "../../../utils/uiUtils/generateToggleInput";

export const notificationSettingsView = function () {
  return `<div style='display : none' class='buyer-settings-wrapper notification-settings-view'> 
 ${
   !isPhone()
     ? `${generateTextInput(
         "Telegram Bot Token",
         "",
         { idTelegramBotToken },
         "Token of your own bot",
         "CommonSettings",
         "text"
       )}
  ${generateTextInput(
    "Telegram Chat ID",
    "",
    { idTelegramChatId },
    "Your Telegram ChatID",
    "CommonSettings",
    "text"
  )}
  ${generateTextInput(
    "Discord Bot Token",
    "",
    { idDiscordToken },
    "Your Discord Bot Token",
    "CommonSettings",
    "text"
  )}
  ${generateTextInput(
    "Discord Channel ID",
    "",
    { idDiscordChannelId },
    "Your Discord Channel ID",
    "CommonSettings",
    "text"
  )}
  ${generateTextInput(
    "Fut Market Alert Notification Token",
    "",
    { idFUTMarketAlertToken },
    "Your FUT Market Alert App's Token",
    "CommonSettings",
    "text"
  )}`
     : ""
 }
  ${generateTextInput(
    "Notification Type",
    "",
    { idNotificationType },
    "Type A for all notifications, B for buy or L for lost",
    "CommonSettings",
    "text",
    "[A|B|L]$"
  )}
  ${generateToggleInput(
    "Send Notification",
    { idAbMessageNotificationToggle },
    "",
    "CommonSettings"
  )}
   ${
     !isPhone()
       ? `${generateToggleInput(
           "Sound Notification",
           { idAbSoundToggle },
           "",
           "CommonSettings"
         )}
  <audio id='${idWinMp3}' hidden>
    <source src="https://notificationsounds.com/storage/sounds/file-sounds-869-coins.ogg" type="audio/ogg">
    <source src="https://notificationsounds.com/storage/sounds/file-sounds-869-coins.mp3" type="audio/mpeg">
      "Your browser does not support the audio element"
  </audio> 
  <audio id='${idCapatchaMp3}' hidden>
    <source src="https://notificationsounds.com/storage/sounds/file-sounds-897-alarm-frenzy.ogg" type="audio/ogg">
    <source src="https://notificationsounds.com/storage/sounds/file-sounds-897-alarm-frenzy.mp3" type="audio/mpeg">
      "Your browser does not support the audio element"
  </audio>
  <audio id='${idFinishMp3}' hidden>
    <source src="https://freesound.org/data/previews/220/220763_4104696-lq.ogg" type="audio/ogg">
    <source src="https://freesound.org/data/previews/220/220763_4104696-lq.mp3" type="audio/mpeg">
      "Your browser does not support the audio element"
  </audio> `
       : ""
   }
   <div class="btn-test-notification buyer-settings-field">  
   ${generateButton(
     idTestNotification,
     "Test Notification",
     () => sendNotificationToUser("Test Notification Message", true),
     "call-to-action"
   )} 
   </div>
  `;
};
