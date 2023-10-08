import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  favicon:"https://api.iconify.design/ph:cloud-light.svg",	// 网页图标链接
  lang: 'zh-CN',
  title: "未明的小破站",
  author: {
    name: '未明hugh',
    avatar: "/public/headpicture_loughface.png",	//头像链接
    status: {
      emoji: '💛'	// 头像旁边的emoji
    },
  },
  subtitle: 'life,reading,writing...',
  description: '',
  social: [
    /*{
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },*/
    {
      name: 'GitHub',
      link: 'https://github.com/HughZH',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: false,
  },

  /*sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },*/
})
