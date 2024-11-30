import { Trie } from 'trie-typed';


// IP Address Routing Table
// Add IP address prefixes and their corresponding routes
const routes = {
    '192.168.1': 'LAN_SUBNET_1',
    '192.168.2': 'LAN_SUBNET_2',
    '10.0.0': 'PRIVATE_NETWORK_1',
    '10.0.1': 'PRIVATE_NETWORK_2'
};

const ipRoutingTable = new Trie<string>(Object.keys(routes));

// Check IP address prefix matching
console.log(ipRoutingTable.hasPrefix('192.168.1')); // true
console.log(ipRoutingTable.hasPrefix('192.168.2')); // true

// Validate IP address belongs to subnet
const ip = '192.168.1.100';
const subnet = ip.split('.').slice(0, 3).join('.');
console.log(ipRoutingTable.hasPrefix(subnet)); // true
