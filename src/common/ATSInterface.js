export default [
    {
       "outputs":[
          {
             "name":"",
             "type":"string"
          }
       ],
       "constant":true,
       "payable":false,
       "inputs":[

       ],
       "name":"name",
       "type":"function"
    },
    {
       "outputs":[
          {
             "name":"",
             "type":"uint128"
          }
       ],
       "constant":true,
       "payable":false,
       "inputs":[

       ],
       "name":"liquidSupply",
       "type":"function"
    },
    {
       "outputs":[
          {
             "name":"",
             "type":"uint128"
          }
       ],
       "constant":true,
       "payable":false,
       "inputs":[

       ],
       "name":"totalSupply",
       "type":"function"
    },
    {
       "outputs":[
          {
             "name":"",
             "type":"uint128"
          }
       ],
       "constant":true,
       "payable":false,
       "inputs":[

       ],
       "name":"granularity",
       "type":"function"
    },
    {
       "outputs":[

       ],
       "constant":false,
       "payable":false,
       "inputs":[
          {
             "name":"from",
             "type":"address"
          },
          {
             "name":"to",
             "type":"address"
          },
          {
             "name":"amount",
             "type":"uint128"
          },
          {
             "name":"holderData",
             "type":"bytes"
          },
          {
             "name":"operatorData",
             "type":"bytes"
          }
       ],
       "name":"operatorSend",
       "type":"function"
    },
    {
       "outputs":[
          {
             "name":"",
             "type":"uint128"
          }
       ],
       "constant":true,
       "payable":false,
       "inputs":[
          {
             "name":"owner",
             "type":"address"
          }
       ],
       "name":"balanceOf",
       "type":"function"
    },
    {
       "outputs":[

       ],
       "constant":false,
       "payable":false,
       "inputs":[
          {
             "name":"localSender",
             "type":"address"
          },
          {
             "name":"remoteRecipient",
             "type":"bytes32"
          },
          {
             "name":"amount",
             "type":"uint128"
          },
          {
             "name":"bridgeId",
             "type":"bytes32"
          },
          {
             "name":"localData",
             "type":"bytes"
          }
       ],
       "name":"operatorFreeze",
       "type":"function"
    },
    {
       "outputs":[

       ],
       "constant":false,
       "payable":false,
       "inputs":[
          {
             "name":"remoteRecipient",
             "type":"bytes32"
          },
          {
             "name":"amount",
             "type":"uint128"
          },
          {
             "name":"bridgeId",
             "type":"bytes32"
          },
          {
             "name":"localData",
             "type":"bytes"
          }
       ],
       "name":"freeze",
       "type":"function"
    },
    {
       "outputs":[

       ],
       "constant":false,
       "payable":false,
       "inputs":[
          {
             "name":"operator",
             "type":"address"
          }
       ],
       "name":"authorizeOperator",
       "type":"function"
    },
    {
       "outputs":[
          {
             "name":"",
             "type":"string"
          }
       ],
       "constant":true,
       "payable":false,
       "inputs":[

       ],
       "name":"symbol",
       "type":"function"
    },
    {
       "outputs":[

       ],
       "constant":false,
       "payable":false,
       "inputs":[
          {
             "name":"localRecipient",
             "type":"address"
          },
          {
             "name":"amount",
             "type":"uint128"
          },
          {
             "name":"bridgeId",
             "type":"bytes32"
          },
          {
             "name":"bridgeData",
             "type":"bytes"
          },
          {
             "name":"remoteSender",
             "type":"bytes32"
          },
          {
             "name":"remoteBridgeId",
             "type":"bytes32"
          },
          {
             "name":"remoteData",
             "type":"bytes"
          }
       ],
       "name":"thaw",
       "type":"function"
    },
    {
       "outputs":[

       ],
       "constant":false,
       "payable":false,
       "inputs":[
          {
             "name":"from",
             "type":"address"
          },
          {
             "name":"amount",
             "type":"uint128"
          },
          {
             "name":"holderData",
             "type":"bytes"
          },
          {
             "name":"operatorData",
             "type":"bytes"
          }
       ],
       "name":"operatorBurn",
       "type":"function"
    },
    {
       "outputs":[
          {
             "name":"",
             "type":"bool"
          }
       ],
       "constant":true,
       "payable":false,
       "inputs":[
          {
             "name":"operator",
             "type":"address"
          },
          {
             "name":"tokenHolder",
             "type":"address"
          }
       ],
       "name":"isOperatorFor",
       "type":"function"
    },
    {
       "outputs":[

       ],
       "constant":false,
       "payable":false,
       "inputs":[
          {
             "name":"to",
             "type":"address"
          },
          {
             "name":"amount",
             "type":"uint128"
          },
          {
             "name":"holderData",
             "type":"bytes"
          }
       ],
       "name":"send",
       "type":"function"
    },
    {
       "outputs":[

       ],
       "constant":false,
       "payable":false,
       "inputs":[
          {
             "name":"amount",
             "type":"uint128"
          },
          {
             "name":"holderData",
             "type":"bytes"
          }
       ],
       "name":"burn",
       "type":"function"
    },
    {
       "outputs":[

       ],
       "constant":false,
       "payable":false,
       "inputs":[
          {
             "name":"operator",
             "type":"address"
          }
       ],
       "name":"revokeOperator",
       "type":"function"
    },
    {
       "outputs":[

       ],
       "inputs":[
          {
             "indexed":true,
             "name":"_totalSupply",
             "type":"uint128"
          },
          {
             "indexed":true,
             "name":"_creator",
             "type":"address"
          }
       ],
       "name":"Created",
       "anonymous":false,
       "type":"event"
    },
    {
       "outputs":[

       ],
       "inputs":[
          {
             "indexed":true,
             "name":"_operator",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"_from",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"_to",
             "type":"address"
          },
          {
             "indexed":false,
             "name":"_amount",
             "type":"uint128"
          },
          {
             "indexed":false,
             "name":"_holderData",
             "type":"bytes"
          },
          {
             "indexed":false,
             "name":"_operatorData",
             "type":"bytes"
          }
       ],
       "name":"Sent",
       "anonymous":false,
       "type":"event"
    },
    {
       "outputs":[

       ],
       "inputs":[
          {
             "indexed":true,
             "name":"localRecipient",
             "type":"address"
          },
          {
             "indexed":false,
             "name":"amount",
             "type":"uint128"
          },
          {
             "indexed":true,
             "name":"bridgeId",
             "type":"bytes32"
          },
          {
             "indexed":false,
             "name":"bridgeData",
             "type":"bytes"
          },
          {
             "indexed":true,
             "name":"remoteSender",
             "type":"bytes32"
          },
          {
             "indexed":false,
             "name":"remoteBridgeId",
             "type":"bytes32"
          },
          {
             "indexed":false,
             "name":"remoteData",
             "type":"bytes"
          }
       ],
       "name":"Thawed",
       "anonymous":false,
       "type":"event"
    },
    {
       "outputs":[

       ],
       "inputs":[
          {
             "indexed":true,
             "name":"localSender",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"remoteRecipient",
             "type":"bytes32"
          },
          {
             "indexed":false,
             "name":"amount",
             "type":"uint128"
          },
          {
             "indexed":true,
             "name":"bridgeId",
             "type":"bytes32"
          },
          {
             "indexed":false,
             "name":"localData",
             "type":"bytes"
          }
       ],
       "name":"Froze",
       "anonymous":false,
       "type":"event"
    },
    {
       "outputs":[

       ],
       "inputs":[
          {
             "indexed":true,
             "name":"_operator",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"_to",
             "type":"address"
          },
          {
             "indexed":false,
             "name":"_amount",
             "type":"uint128"
          },
          {
             "indexed":false,
             "name":"_operatorData",
             "type":"bytes"
          }
       ],
       "name":"Minted",
       "anonymous":false,
       "type":"event"
    },
    {
       "outputs":[

       ],
       "inputs":[
          {
             "indexed":true,
             "name":"_operator",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"_from",
             "type":"address"
          },
          {
             "indexed":false,
             "name":"_amount",
             "type":"uint128"
          },
          {
             "indexed":false,
             "name":"_holderData",
             "type":"bytes"
          },
          {
             "indexed":false,
             "name":"_operatorData",
             "type":"bytes"
          }
       ],
       "name":"Burned",
       "anonymous":false,
       "type":"event"
    },
    {
       "outputs":[

       ],
       "inputs":[
          {
             "indexed":true,
             "name":"_operator",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"_tokenHolder",
             "type":"address"
          }
       ],
       "name":"AuthorizedOperator",
       "anonymous":false,
       "type":"event"
    },
    {
       "outputs":[

       ],
       "inputs":[
          {
             "indexed":true,
             "name":"_operator",
             "type":"address"
          },
          {
             "indexed":true,
             "name":"_tokenHolder",
             "type":"address"
          }
       ],
       "name":"RevokedOperator",
       "anonymous":false,
       "type":"event"
    }
 ]
