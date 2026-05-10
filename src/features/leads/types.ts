export type LeadStatus = 'New' | 'Contacted' | 'Qualified' | 'Proposal Sent' | 'Negotiation'
export type OutreachStatus = 'Not Started' | 'Sequence Live' | 'Replied' | 'Meeting Booked'

export type Lead = {
  id: string
  company: string
  industry: string
  status: LeadStatus
  score: number
  source: 'Website' | 'LinkedIn' | 'Referral' | 'Inbound'
  dateAdded: string
  contactName: string
  contactRole: string
  website: string
  employeeRange: string
  outreachStatus: OutreachStatus
  tags: string[]
  notes: string
  timeline: Array<{
    label: string
    time: string
  }>
}
