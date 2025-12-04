export interface IBeasiswaForm {
  nama: string;
  nim: string;
  prodi: string;
  semester: string;
  ipk: string;
  ktm: File | null;
  transkrip: File | null;
  rekomendasi: File | null;
  krs: File | null;
}

export type { IBeasiswaForm };
