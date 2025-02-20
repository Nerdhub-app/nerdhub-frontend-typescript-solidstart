export type AbilityAction = "view" | "create" | "update" | "delete";

export interface CheckableAbility<TAbilityAction extends AbilityAction, TResource> {
  can(action: TAbilityAction, resource?: TResource): boolean;
  cannot(action: TAbilityAction, resource?: TResource): boolean;
}
