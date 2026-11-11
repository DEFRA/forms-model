import { type FormStatus } from '~/src/common/enums.js'
import {
  type FormMetricName,
  type FormMetricType,
  type FunctionalAreaSubType,
  type SigninMetricName
} from '~/src/form/form-metrics/enums.js'

export interface FormTotalMetric {
  count?: number
  details?: {
    formId: string
    metricValue?: string | Date | number
    createdAt?: Date
  }
}

export interface FormTotalsMetric {
  type: FormMetricType.TotalsMetric
  last7Days?: Record<FormMetricName, FormTotalMetric>
  prev7Days?: Record<FormMetricName, FormTotalMetric>
  last30Days?: Record<FormMetricName, FormTotalMetric>
  prev30Days?: Record<FormMetricName, FormTotalMetric>
  lastYear?: Record<FormMetricName, FormTotalMetric>
  prevYear?: Record<FormMetricName, FormTotalMetric>
  allTime?: Record<FormMetricName, FormTotalMetric>
  liveSubmissions?: Record<string, number>
  draftSubmissions?: Record<string, number>
  daysToPublish?: Record<string, number>
  republished?: Record<string, number>
  language?: string
  updatedAt: Date
  earliestDate: Date
}

export interface FormOverviewMetric {
  type: FormMetricType.OverviewMetric
  formId: string
  formStatus: FormStatus
  summaryMetrics: Record<string, number | string | string[]>
  featureMetrics: Record<string, Map<string, number>>
  submissionsCount: number
  updatedAt: Date
  language?: string
}

export interface FormTimelineMetric {
  type: FormMetricType.TimelineMetric
  formId: string
  formStatus: FormStatus
  metricName: FormMetricName
  language?: string
  metricValue: number
  createdAt: Date
}

export interface FormDrilldownMetric {
  type: FormMetricType.DrilldownMetric
  formId: string
  metricName: FormMetricName
  metricValue: number
  periodName: string
  createdAt: Date
  language?: string
}

export type FormMetric =
  | FormTotalsMetric
  | FormOverviewMetric
  | FormTimelineMetric

export interface SigninTimelineMetric {
  type: FormMetricType.TimelineMetric
  metricName: SigninMetricName
  metricValue: number
  createdAt: Date
}

export type FunctionalAreaMetricName = SigninMetricName
// Add 'copy' and 'edit' metric names as needed

export interface FunctionalAreaTotalMetric {
  count: number
}

export interface FunctionalAreaTotalsMetric {
  type: FormMetricType.FunctionalAreaTotalsMetric
  subType: FunctionalAreaSubType
  last7Days?: Record<FunctionalAreaMetricName, FunctionalAreaTotalMetric>
  prev7Days?: Record<FunctionalAreaMetricName, FunctionalAreaTotalMetric>
  last30Days?: Record<FunctionalAreaMetricName, FunctionalAreaTotalMetric>
  prev30Days?: Record<FunctionalAreaMetricName, FunctionalAreaTotalMetric>
  lastYear?: Record<FunctionalAreaMetricName, FunctionalAreaTotalMetric>
  prevYear?: Record<FunctionalAreaMetricName, FunctionalAreaTotalMetric>
  allTime?: Record<FunctionalAreaMetricName, FunctionalAreaTotalMetric>
  updatedAt: Date
  earliestDate: Date
}
