import { Entity, EntityWithTimestamps } from "~/types/api";

export type PlanThemeColor = "success" | "secondary" | "primary";

export type PlanAttributes = {
  name: string;
  description: string;
  fee: number;
  themeColor: PlanThemeColor;
  dailyCredits: number;
  features: PlanFeatureEntity[];
};

export type PlanEntity = Entity<PlanAttributes>;

export type PlanFeatureAttributes = {
  planId: number;
  num: number;
  isSupported: boolean;
  description: string;
};

export type PlanFeatureEntity = EntityWithTimestamps<PlanFeatureAttributes>;
