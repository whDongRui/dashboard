// original
// export const providers={
//   // key => label
//   qingcloud: 'QingCloud',
//   aws: 'AWS',
//   aliyun: 'Aliyun',
//   kubernetes: 'Kubernetes'
// };

export const providers = [
  { name: 'QingCloud', icon: 'qingcloud', key: 'qingcloud' },
  { name: 'Aliyun', icon: 'aliyun', key: 'aliyun' },
  { name: 'Amazon Web Service', icon: 'aws', key: 'aws' },
  { name: 'Kubernetes', icon: 'kubernetes', key: 'kubernetes' },
  {
    name: 'OpenStack',
    icon: 'openstack',
    key: 'openstack',
    disabled: true
  },
  {
    name: 'VMware',
    icon: 'vmware',
    key: 'vmware',
    disabled: true
  },
  {
    name: 'EdgeWise',
    icon: 'edgewise',
    key: 'edgewise',
    disabled: true
  }
];

export const tabs = ['Testing env', 'Authorization info'];
