import { AbilityAction, CheckableAbility } from "./ability";

export class AllowancesBuilder<TAbilityAction extends AbilityAction = AbilityAction> {
  #allowances: Map<TAbilityAction, boolean> = new Map();

  constructor() {
    this.can = this.can.bind(this);
    this.cannot = this.cannot.bind(this);
  }

  can(action: TAbilityAction): this {
    const allowance = this.#allowances.get(action);
    if (typeof allowance === "undefined" || allowance) {
      this.#allowances.set(action, true);
    }
    return this;
  }

  cannot(action: TAbilityAction): this {
    this.#allowances.set(action, false);
    return this;
  }

  build(): Map<TAbilityAction, boolean> {
    return this.#allowances;
  }
}

export function defineAbility<
  TSubject,
  TResource,
  TAbilityAction extends AbilityAction = AbilityAction,
>(
  define: (
    builder: AllowancesBuilder<TAbilityAction>,
    subject: TSubject,
    resource?: TResource,
  ) => void,
) {
  function buildAllowances(subject: TSubject, resource?: TResource) {
    const builder = new AllowancesBuilder<TAbilityAction>();
    define(builder, subject, resource);
    return builder.build();
  }

  return function (subject: TSubject): CheckableAbility<TAbilityAction, TResource> {
    return {
      can(action, resource) {
        const allowances = buildAllowances(subject, resource);
        return allowances.get(action) ?? false;
      },
      cannot(action, resource) {
        const allowances = buildAllowances(subject, resource);
        return !allowances.get(action);
      },
    };
  };
}
