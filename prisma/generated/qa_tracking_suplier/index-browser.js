
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.MstMaterialCapaScalarFieldEnum = {
  id: 'id',
  kode_vendor: 'kode_vendor',
  name_vendor: 'name_vendor',
  material_code: 'material_code',
  nama_material: 'nama_material'
};

exports.Prisma.SupplierMaterialViewScalarFieldEnum = {
  id: 'id',
  kode_vendor: 'kode_vendor',
  name_vendor: 'name_vendor',
  material_code: 'material_code',
  nama_material: 'nama_material',
  area: 'area'
};

exports.Prisma.SupplierScoreScalarFieldEnum = {
  id: 'id',
  tahun: 'tahun',
  bulan: 'bulan',
  tgl: 'tgl',
  category: 'category',
  suplier_name: 'suplier_name',
  kode_vendor: 'kode_vendor',
  area_to: 'area_to',
  plan: 'plan',
  abnormal: 'abnormal',
  total_incoming: 'total_incoming',
  total_abnormal: 'total_abnormal',
  persen_abnormal: 'persen_abnormal',
  feedback: 'feedback',
  acceptance_improvement: 'acceptance_improvement',
  downtime: 'downtime',
  cc: 'cc',
  issue: 'issue',
  value_material: 'value_material',
  Grade_Material: 'Grade_Material'
};

exports.Prisma.ComplaintStatusScalarFieldEnum = {
  id: 'id',
  kode_vendor: 'kode_vendor',
  name_vendor: 'name_vendor',
  tgl_complain: 'tgl_complain',
  status: 'status'
};

exports.Prisma.TrSupplierAuditScalarFieldEnum = {
  id: 'id',
  plan_type: 'plan_type',
  plant: 'plant',
  date_plan: 'date_plan',
  id_supplier: 'id_supplier',
  code_supplier: 'code_supplier',
  city: 'city',
  id_material: 'id_material',
  date_complete: 'date_complete',
  score: 'score',
  status: 'status',
  evidence: 'evidence',
  evidence_type: 'evidence_type',
  evidence_size: 'evidence_size',
  evidence_widht: 'evidence_widht',
  evidence_height: 'evidence_height',
  improvment: 'improvment'
};

exports.Prisma.AbnormalityHistoricalScalarFieldEnum = {
  kode_vendor: 'kode_vendor',
  abnormal: 'abnormal',
  total_case: 'total_case'
};

exports.Prisma.KedatanganSapNewScalarFieldEnum = {
  inspection_lot: 'inspection_lot',
  plan: 'plan',
  OBJNR: 'OBJNR',
  OBTYP: 'OBTYP',
  tahun: 'tahun',
  bulan: 'bulan',
  kuartal: 'kuartal',
  insp_start_date: 'insp_start_date',
  insp_end_date: 'insp_end_date',
  vendor: 'vendor',
  material: 'material',
  lotno: 'lotno',
  ket: 'ket',
  insp_quantity: 'insp_quantity',
  satuan: 'satuan',
  jenis: 'jenis'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.MstMaterialCapaOrderByRelevanceFieldEnum = {
  kode_vendor: 'kode_vendor',
  name_vendor: 'name_vendor',
  material_code: 'material_code',
  nama_material: 'nama_material'
};

exports.Prisma.SupplierMaterialViewOrderByRelevanceFieldEnum = {
  kode_vendor: 'kode_vendor',
  name_vendor: 'name_vendor',
  material_code: 'material_code',
  nama_material: 'nama_material',
  area: 'area'
};

exports.Prisma.SupplierScoreOrderByRelevanceFieldEnum = {
  tahun: 'tahun',
  bulan: 'bulan',
  category: 'category',
  suplier_name: 'suplier_name',
  kode_vendor: 'kode_vendor',
  area_to: 'area_to',
  plan: 'plan',
  Grade_Material: 'Grade_Material'
};

exports.Prisma.ComplaintStatusOrderByRelevanceFieldEnum = {
  kode_vendor: 'kode_vendor',
  name_vendor: 'name_vendor',
  status: 'status'
};

exports.Prisma.TrSupplierAuditOrderByRelevanceFieldEnum = {
  plan_type: 'plan_type',
  plant: 'plant',
  code_supplier: 'code_supplier',
  city: 'city',
  evidence: 'evidence',
  evidence_type: 'evidence_type',
  improvment: 'improvment'
};

exports.Prisma.AbnormalityHistoricalOrderByRelevanceFieldEnum = {
  kode_vendor: 'kode_vendor',
  abnormal: 'abnormal'
};

exports.Prisma.KedatanganSapNewOrderByRelevanceFieldEnum = {
  inspection_lot: 'inspection_lot',
  plan: 'plan',
  OBJNR: 'OBJNR',
  OBTYP: 'OBTYP',
  tahun: 'tahun',
  bulan: 'bulan',
  vendor: 'vendor',
  material: 'material',
  lotno: 'lotno',
  ket: 'ket',
  satuan: 'satuan',
  jenis: 'jenis'
};


exports.Prisma.ModelName = {
  MstMaterialCapa: 'MstMaterialCapa',
  SupplierMaterialView: 'SupplierMaterialView',
  SupplierScore: 'SupplierScore',
  ComplaintStatus: 'ComplaintStatus',
  TrSupplierAudit: 'TrSupplierAudit',
  AbnormalityHistorical: 'AbnormalityHistorical',
  KedatanganSapNew: 'KedatanganSapNew'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
