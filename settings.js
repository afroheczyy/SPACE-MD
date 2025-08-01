require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAOOYAVvW9mxLUgQAAHAHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3nFGlBAhKquWkQUVBC869Y+RAg3uZkEBKf871u009PzsDvby1NIUud857vkO8iLmKAFaoHyHZQ4riFF3ZK2JQIKGFdBgDDoAR9SCBRAVmTdGrXAaPv1cs3wq*WlvrJ5e25Z*RAmjju29*nWPKuZ+gaePVBWlzT2flOQiYP7QnbZhzkRHFZWh4lMBRQud*qozwipy9t6Iwen2+xhvYFnVxHGOM5DvYxQhjBMF6h1YIy*Bp+z7ZwGwtJgLNtgZ2MayMnQahGeo5vKZ+Z2scfM5Y4co*ga*PG0KfcHq73o*KJmj8VdZaPc9dLdft+XD3U8DUYwwbVFE+8Fn8RhjnzTRzmNaftl3k0tu6zs6HrDqlNE2T2zUlhp1Bwkwu0WDI*GehmItI2M4xeB28SbcRJ3pcchUx2mUh7P2Awbu4G0WbRufHQj*ZafZ0UVWb8Cd*CHV67*h3dvEiytTBT0h4*MtaAJDDmZrkMm07Y15tvYysjs5tVswnNfg79t52zTb5dlPfeF1Sw*+E5kk7SabY1BpoqL5RQvm+QcJpvdJ3xIK*w7lGOOvxwxV0iZ5WG53PjBgjR6jMNlHbIjP2gSZrE4ydd6Pb8eDku71vfmYOLhfGY+1ourPuPjdeiiXbtN8KmA2smw8dh9e5*oilrTB0r*2QMYhTGhGNK4yLs9edgD0K83yMOIvrMLzig8WfaWXYj7mmisNmGKqxxW6oNdD+n5agysid4fDlbx6foGeqDEhYcIQb4RE1rg1kKEwBARoPz5Vw*kqKEv3bpufL8HghgTusurMi2g*yHqxyH0vKLK6abNPa1bIAwU7nMbURrnIelorHKIvSiukRZBSoASwJSgnwMijHygUFyhn6HVCr*jfbqZq*3RcQN6IHvXI*aBAgY8L4pDSZYEXlQk+Q*y7d6VhWX5LUcU9ED6utaX+ZEkjPi+OBBHUnezO3j+RNgV9BGFcUqAAjRnEhLb1HSLCanlzmaqHqpaqILPiT6c8aIerQ43V2scfnUvouZ8h8725gxumz0+Th9usLEf+7Fgtxpqdm**UAQogB8xWf9WSnrlTCPkNS6Fq8vFObOeU5mNOmQbO9HrWh5F2nmYc6r42KmikZ93xcJn3JO6uOnWyHCd2bLRdr54lgyhnKhvXTcf1bGHfm0mNVVwu+ZS6EdjiO72OYV4qnJEWE3nl8kRMzJbT0foINvznXCpRwI3d5apbbWOPQm2rRgw6*wkpdV0PraNIFTDuSdq95dn3zOT*nir4nc7dVp1v0GM3qOfw07B*9buBbyzGPfs*VLjx2Pyb4E8JuntqpKt*CAL0zt4s4QbJvLtmsJ+43EGl3h9F028MCd78Hz+1QNlCmlQ4AwoAOY+LmIf9AAuqs6zZh4Uv2mmqaGphq*JU0io+pmDbZwhQmFWAqUviQIniYMB97rl4KI0IImAAvKMH186T7dqWW4opB+pAmr3zY8YPP8GUEsBAhQDFAAACAgA45gBW9b2bEtSBAAAcAcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233556797435',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
