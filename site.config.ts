import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://valaxy.site/',
  favicon:"https://api.iconify.design/ph:cloud-light.svg",	// 网页图标链接
  lang: 'zh-CN',
  title: "未明的小破站",
  author: {
    name: '未明hugh',
    avatar: "https://hughes-pic-1312042851.cos.ap-nanjing.myqcloud.com/headpicture_loughface.png?q-sign-algorithm=sha1&q-ak=AKIDlqXA8_tmIqj7MNj5fLCx1w0rcuTc9wOW9bhU2TK9PmcszRbVj8jHN55aSWvnGO4_&q-sign-time=1696766822;1696770422&q-key-time=1696766822;1696770422&q-header-list=host&q-url-param-list=ci-process&q-signature=dd4858ab86728c5f973d826ec69bcd7c55af4e2f&x-cos-security-token=beUXadn2tphyJCdesyxsS3Y6cDkYPGiacd56564bca7b2528e6f566a549718c86NbWnVhbs77n0U9OOSs1XKpsqLquI0w3YzS-8kgbMvx34M-Pxfcd24tzDNMJGsM1jj-b-lfpGZAX9OPFwCa4caQnKsxkEmutUxsQz2N7--3lohgfiUeT-4TxLDkWv69kY1-MF9q82L1tH_LgjWYEbQV3mgDJApcWGHSaaup5IxEzYLwVIRR3yOOfEHMM7nLBh&ci-process=originImage",	//头像链接
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
