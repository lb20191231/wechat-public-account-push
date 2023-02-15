/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
	USE_PASSAGE: 'server-chan',

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx10a7007b43c48892',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '482958ec22d602f454df241176d4cd9c',
IS_SHOW_COLOR:true,

  PROVINCE: '河北省',
  CITY: '石家庄市',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogeU569C0QJmpTr-xG8PcdThQidU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {type:"生日",name:"你宝贝的生日",date:"07-27",year:"2023"}
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-12-31' }
      ],
    },
  ],
SWITCH:{
	weather:true,holidaytts:true,CIBA:true,oneTalk:false,
	earthyLoveWords:false,momentCopyrighting:false,
	poisonChickenSoup:false,poetry:false,horoscope:false,
	birthdayMessage:true
}

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0002',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ogeU562oAC2BO0cIDLqEbv_NBFPA',
    }
  ],

}

module.exports = USER_CONFIG




