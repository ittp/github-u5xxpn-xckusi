import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../interfaces';

let dataw = Array(100).map((i, k) => {
  id: k;
});
let secret = [
  [0, '109.188.130.219', 'vapezone1ayasovetskay10.keenetic.pro'],
  [1, '109.188.133.63', 'vapezoneprosveshenie36k1.keenetic.pro'],
  [2, '109.188.130.40', 'vapezonegakelevskaya34.keenetic.pro'],
  [3, '109.188.133.53', 'vapezonebolshevikov19a.keenetic.pro'],
  [4, '109.188.130.216', 'vapezonenepokorennyh2a.keenetic.pro'],
  [5, '109.188.141.111', 'vapezonebasseynaya41.keenetic.pro'],
  [6, '109.188.140.9', 'vapezonegrenaderskaya20.keenetic.pro'],
  [7, '109.188.128.36', 'vapezoneengelsa139.keenetic.pro'],
  [8, '109.188.143.200', 'vapezonenovatorov102k3.keenetic.pro'],
  [9, '109.188.132.105', 'vapezonekolomyazhskiy15k2.keenetic.pro'],
  [10, '109.188.133.56', 'vapezoneakademikakrylova3a.keenetic.pro'],
  [11, '109.188.136.143', 'komendantskaya1.keenetic.pro'],
  [12, '109.188.131.67', 'vapezonekolomyajskiy17k2.keenetic.pro'],
  [13, '109.188.129.181', 'vapezoneleninskiy129k6a.keenetic.pro'],
  [14, '109.188.139.240', 'vapezonebalkanskaya5v.keenetic.pro'],
  [15, '109.188.143.116', 'vapezoneutkin13k15.keenetic.pro'],
  [16, '109.188.133.45', 'vapezoneispytateley6.keenetic.pro'],
  [17, '109.188.134.133', 'vapezoneligovskiy107.keenetic.pro'],
  [18, '109.188.130.50', 'vapezonekantemirovskaya27.keenetic.pro'],
  [19, '109.188.139.178', 'vapezonezanevskiy67k2.keenetic.pro'],
  [20, '109.188.140.100', 'vapezoneleningradskaya1k.keenetic.pro'],
  [21, '109.188.143.86', 'vapezoneefimova1drop4.keenetic.pro'],
  [22, '109.188.128.69', 'vapezonezvezdnaya8.keenetic.pro'],
  [23, '109.188.129.100', 'vapezonesadovaya40b.keenetic.pro'],
  [24, '109.188.131.236', 'vapezonepyatiletok2a.keenetic.pro'],
  [25, '109.188.139.245', 'vapezoneevropeyskiy15.keenetic.pro'],
  [26, '109.188.135.108', 'vapezonesennaya4.keenetic.pro'],
  [27, '109.188.139.15', 'vapezonemihailadydina6k1.keenetic.pro'],
  [28, '109.188.131.248', 'vapezonenayki21t.keenetic.pro'],
  [29, '109.188.133.28', 'kamennoostrovsky.keenetic.pro'],
  [30, '109.188.131.126', 'vosstania1.keenetic.pro'],
  [31, '109.188.142.14', 'privokzalnayapl3.keenetic.pro'],
  [32, '109.188.130.217', 'liteinypr.keenetic.pro'],
  [33, '109.188.135.45', 'vapezonekamennostrovskogo40.keenetic.pro'],
  [34, '109.188.132.124', 'vapezoneobyhovskoi116k1e.keenetic.pro'],
  [35, '94.25.216.137', 'moskovskiy105.keenetic.pro'],
  [36, '109.188.131.131', 'gasheka11.keenetic.pro'],
  [37, '109.188.143.98', 'srendiyprvo28.keenetic.pro'],
  [38, '109.188.142.73', 'vapezonenevskiy32-34.keenetic.pro'],
  [39, '109.188.136.123', '8liniyavo.keenetic.pro'],
  [40, '109.188.134.9', 'parfenovskaya.keenetic.pro'],
  [41, '109.188.140.112', 'vapezoneodoevskogo31.keenetic.pro'],
  [42, '109.188.142.41', 'engelsya138.keenetic.pro'],
  [43, '77.241.38.59', 'komsomola45.keenetic.pro'],
  [44, '95.167.33.51', ''],
  [45, '87.237.118.117', 'coffevape.keenetic.pro'],
  [46, '92.100.37.229', '92.100.37.229:5449'],
  [47, '188.243.88.229', '188.243.88.229:8888'],
  [48, '188.242.98.220', ''],
  [49, '93.100.77.167', '93.100.77.167:8888'],
  [50, '188.243.153.0', '188.243.153.0:8888'],
  [51, '188.242.179.156', '188.242.179.156:8888'],
  [52, '88.201.215.39', '88.201.215.39:8888'],
  [53, '188.242.146.180', 'vapezonepyatiletok2.keenetic.pro'],
  [54, '85.21.168.227', '85.21.168.227:8888'],
  [55, '91.190.115.49', '91.190.115.49:8080'],
  [56, '109.188.132.7', 'vapezonezastavskai38.keenetic.pro'],
];

const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  // Get data from your database

  let data = secret.map((i) => [{ ip: i[1], domain: i[2], id: i[0] }]);

  res.status(200).json(data);

  console.log(data);
}
