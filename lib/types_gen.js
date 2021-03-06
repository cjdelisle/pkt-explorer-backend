/*@flow*/
/*::
import type { Type_t } from './types.js';
export type ClickHouseTypes_t = {
  FixedString: (num :number) => Type_t,
  String: Type_t,
  DateTime: (tz :string) => Type_t,
  DateTime_number: (tz :string) => Type_t,
  Enum: (enums :{[string]:number}) => Type_t,
  Alias: (t :Type_t, expr :string) => Type_t,
  Int8: Type_t,
  UInt8: Type_t,
  UInt8_string: Type_t,
  Int8_string: Type_t,
  Int16: Type_t,
  UInt16: Type_t,
  UInt16_string: Type_t,
  Int16_string: Type_t,
  Int32: Type_t,
  UInt32: Type_t,
  UInt32_string: Type_t,
  Int32_string: Type_t,
  Float32: Type_t,
  Int64: Type_t,
  UInt64: Type_t,
  UInt64_string: Type_t,
  Int64_string: Type_t,
  Float64: Type_t,
};
export type blocks_t = {|
  hash: string,
  height: number,
  version: number,
  size: number,
  merkleRoot: string,
  time: number,
  nonce: number,
  bits: number,
  difficulty: number,
  previousBlockHash: string,
  transactionCount: number,
  pcAnnCount: number,
  pcAnnDifficulty: number,
  pcBlkDifficulty: number,
  pcVersion: number,
  dateMs: number,
  networkSteward: string,
  blocksUntilRetarget: number,
  retargetEstimate: number
|};
export type blocktx_t = {|
  blockHash: string,
  txid: string,
  dateMs: number
|};
export type txns_t = {|
  txid: string,
  size: number,
  vsize: number,
  version: number,
  locktime: number,
  inputCount: number,
  outputCount: number,
  value: string,
  coinbase: string,
  firstSeen: number,
  dateMs: number
|};
export type chain_t = {|
  hash: string,
  height: number,
  dateMs: number,
  state: 'uncommitted'|'complete'|'reverted'
|};
export type coins_t = {|
  address: string,
  mintTxid: string,
  mintIndex: number,
  stateTr: number,
  currentState: 'nothing'|'mempool'|'block'|'spending'|'spent'|'burned',
  prevState: 'nothing'|'mempool'|'block'|'spending'|'spent'|'burned',
  dateMs: number,
  value: string,
  coinbase: number,
  voteFor: string,
  voteAgainst: string,
  seenTime: number,
  mintBlockHash: string,
  mintHeight: number,
  mintTime: number,
  spentTxid: string,
  spentTxinNum: number,
  spentBlockHash: string,
  spentHeight: number,
  spentTime: number,
  spentSequence: number
|};
export type TxSeen_t = {|
  address: string,
  mintTxid: string,
  mintIndex: number,
  stateTr: number,
  dateMs: number,
  value: string,
  voteFor: string,
  voteAgainst: string,
  coinbase: number,
  seenTime: number
|};
export type TxMinted_t = {|
  address: string,
  mintTxid: string,
  mintIndex: number,
  stateTr: number,
  dateMs: number,
  value: string,
  voteFor: string,
  voteAgainst: string,
  coinbase: number,
  seenTime: number,
  mintBlockHash: string,
  mintHeight: number,
  mintTime: number
|};
export type TxUnMinted_t = {|
  address: string,
  mintTxid: string,
  mintIndex: number,
  stateTr: number,
  dateMs: number,
  mintBlockHash: string,
  mintHeight: number
|};
export type TxSpent_t = {|
  address: string,
  mintTxid: string,
  mintIndex: number,
  stateTr: number,
  dateMs: number,
  spentTxid: string,
  spentTxinNum: number,
  spentBlockHash: string,
  spentHeight: number,
  spentTime: number,
  spentSequence: number
|};
export type Hashes_t = {|
  hash: string
|};
*/
