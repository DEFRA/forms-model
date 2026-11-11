export enum FormMetricType {
  TotalsMetric = 'totals-metric',
  OverviewMetric = 'overview-metric',
  TimelineMetric = 'timeline-metric',
  DrilldownMetric = 'drilldown-metric',
  FunctionalAreaTotalsMetric = 'functional-area-totals-metric'
}

export enum FormMetricName {
  NewFormsCreated = 'NewFormsCreated',
  FormsFirstPublished = 'FormsFirstPublished',
  FormsRePublished = 'FormsRePublished',
  Submissions = 'Submissions',
  FormsInDraft = 'FormsInDraft',
  TimeToPublish = 'TimeToPublish'
}

export enum FunctionalAreaSubType {
  Signin = 'Signin'
  // Add these later as needed
  // CopyAnswers = 'copy-answers',
  // EditAndResubmit = 'edit-and-resubmit'
}

export enum SigninMetricName {
  Registration = 'Registration',
  SuccessfulAuthentication = 'SuccessfulAuthentication',
  TooManyCodeRequests = 'TooManyCodeRequests',
  IncorrectCodeEntered = 'IncorrectCodeEntered',
  AccountDeletion = 'AccountDeletion',
  EmailAddressUpdate = 'EmailAddressUpdate',
  PhoneNumberUpdate = 'PhoneNumberUpdate'
  // Add these when 'forgotten details' journey is implemented
  // ForgottenDetailsJourney = 'ForgottenDetailsJourney',
  // PhoneNumberNotAssociatedWithAccount = 'PhoneNumberNotAssociatedWithAccount'
}
