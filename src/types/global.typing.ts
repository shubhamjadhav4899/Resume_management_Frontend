export interface ICompany {
  id: string;
  name: string;
  size: string;
  createdAt: string;
}

export interface ICreateCompanyDto {
  name: string;
  size: string;
}

export interface IJob {
  id: string;
  title: String;
  level: String;
  componyId: String;
  componyName: string;
  createdAt: String;
}

export interface ICreateJobDto {
  title: String;
  level: String;
  componyId: String;
}


export interface ICandidate {
  id: String;
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  coverLetter: String;
  resumrUrl: String;
  jobId: String;
  jobTitle: String;
}

export interface ICreateCandidateDto {
  firstName: String;
  lastName: String;
  email: String;
  phone: String;
  coverLetter: String;
  jobId: String;
}
