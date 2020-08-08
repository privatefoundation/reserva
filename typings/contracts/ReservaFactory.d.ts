/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ReservaFactoryInterface extends Interface {
  functions: {
    createExchange: TypedFunctionDescription<{
      encode([_token, _currency, _currencyID]: [
        string,
        string,
        BigNumberish
      ]): string;
    }>;

    tokensToExchange: TypedFunctionDescription<{
      encode([, ,]: [string, string, BigNumberish]): string;
    }>;
  };

  events: {
    NewExchange: TypedEventDescription<{
      encodeTopics([token, currency, currencyID, exchange]: [
        string | null,
        string | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;
  };
}

export class ReservaFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ReservaFactory;
  attach(addressOrName: string): ReservaFactory;
  deployed(): Promise<ReservaFactory>;

  on(event: EventFilter | string, listener: Listener): ReservaFactory;
  once(event: EventFilter | string, listener: Listener): ReservaFactory;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ReservaFactory;
  removeAllListeners(eventName: EventFilter | string): ReservaFactory;
  removeListener(eventName: any, listener: Listener): ReservaFactory;

  interface: ReservaFactoryInterface;

  functions: {
    createExchange(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokensToExchange(
      arg0: string,
      arg1: string,
      arg2: BigNumberish
    ): Promise<string>;
  };

  createExchange(
    _token: string,
    _currency: string,
    _currencyID: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  tokensToExchange(
    arg0: string,
    arg1: string,
    arg2: BigNumberish
  ): Promise<string>;

  filters: {
    NewExchange(
      token: string | null,
      currency: string | null,
      currencyID: BigNumberish | null,
      exchange: null
    ): EventFilter;
  };

  estimate: {
    createExchange(
      _token: string,
      _currency: string,
      _currencyID: BigNumberish
    ): Promise<BigNumber>;

    tokensToExchange(
      arg0: string,
      arg1: string,
      arg2: BigNumberish
    ): Promise<BigNumber>;
  };
}
