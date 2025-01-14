require("dotenv").config(); // Load environment variables

module.exports = {
    prefix: process.env.PREFIX || ".", // Command prefix

    ownerName: process.env.OWNER_NAME || "Toxxic-Boy", // Owner name

    ownerNumber: process.env.OWNER_NUMBER || "2348165846414", // Your WhatsApp number

    mode: process.env.MODE || "public", // Bot mode: 'public' or 'private'

    region: process.env.REGION || "Nigeria", // Region

    botName: process.env.BOT_NAME || "Rias Gremory V3", // Bot name

    exifPack: process.env.EXIF_PACK || "RIAS V3 LOVES", // Sticker pack name

    exifAuthor: process.env.EXIF_AUTHOR || "Toxxic", // Author of the sticker pack

    timeZone: process.env.TIME_ZONE || "Africa/Lagos", // Time zone

    presenceStatus: process.env.PRESENCE_STATUS || "available", // Bot presence status

    autoRead: process.env.AUTO_READ === "true", // Auto-read messages (true or false)

    autoViewStatus: process.env.AUTO_VIEW_STATUS === "true", // Auto-view statuses (true or false)

    autoReact: process.env.AUTO_REACT === "true", // Auto-react (true or false)

    sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ZKQ3RsUTNoRUF0aWtCbUVzQWJTSjlNUFRsVk1CTDVOWjdVUEtFSW1Gdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0toRzVlVXVXU0lWWFJ0Rm1EZ2FQNU5ueVExMkgvanQzMS9PYWZ3QjFsTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSllNSGRIWUtJNjRBUWNpekJmc2UwK0ZDclNFNlp4eFBMd285T2V4a21NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsRmNvWTgweEoyWVNOS0x1SlZNRUttMlU2ZDEvS21BT1NnQXZmYjhPRlFBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDWnhFWWo2eXZOMTBHTmF3RW1keVhSVThMcVFRcmpLUEVNM215QkNUVzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9lK3pqVW0xN3QydHorOGZyMklGN01WbDNZdkFoVnE5ZENRSzNYRmlVRlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0pETzNMYVBzVm5XNUd4TURZK0ZmZEh2TUJocStqUEhtZlg5ZmNQbGptST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3pxQlVza0dESVl1M1hNNWlNWUtzZjJ4T3R6Mm45YU5JZ0JHeC93VFNVOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV0allJdEpTbHFpWXNGTkhYdFdwMTE2Y3cwa3VJUGJFcDdMRnJVS0V4cTM0S3BMWEJtWWpYTGJ5MmM1ZWJscXZuK3FvVEY4aTlCcUN5N1pwR05ENmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiJpYXVYVDdMcWViU0ROL3ZFMmwxd2R5YWJnVGpjQkVJa0JuR3FTQWZrdjVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJRRVNNTk1LRiIsIm1lIjp7ImlkIjoiMjM0OTEzNTI3MDg1MDo4NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjU2ODY5NTYxMzA0MjA6ODZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPR2E0LzRCRU92a21yd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxcnZJRWJVTG8wWnZOdDRuQmtHZjRRR29pZnJ0T1B0SlpidnBaUnkzOUdZPSIsImFjY291bnRTaWduYXR1cmUiOiI4YTFJVFBuclViWWw5bHdGQnlZcGNkZGI2VUgvV2ZhbjBVOEUxRVFUM0pvNG9ISENVYjNtUWR2NTZHTTUySVVaTjNtUHRSOGZtVmxrMHBpNmpLMTBBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRGtKZExFay9BTnNmL1BHazdWL3B4MXcrSEptWk8wZ3d2NmpyTEwwRTdvZi96NGNOb09TQjBzOGFaZGlnWU9GQmN0MWozVDVYM3p0YlNVUUdVbmNHZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTM1MjcwODUwOjg2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRhN3lCRzFDNk5HYnpiZUp3WkJuK0VCcUluNjdUajdTV1c3NldVY3QvUm0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjg4MDc2MiwibGFzdFByb3BIYXNoIjoiM0FvU2hzIn0=", // Add Your Session ID here

    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED || "false", // Auto-reject calls feature (true or false)
};
