// ===== 共用核心邏輯（網頁示範模式與 Google 試算表後端共用同一份） =====
var GT = '綠茶|青茶';
var DEFAULT_MENU_SRC = [
  ['紅茶系列', [['古早味紅茶冰',30,35,'r'],['冬瓜紅茶',30,35,'rf'],['珍珠紅茶冰',40,45,'p'],['椰果紅茶冰',40,45,''],['微檸檬紅茶',40,45,'f'],['重檸檬紅茶',45,55,'f'],['豆漿紅茶',40,50,'r'],['紅茶鮮奶',50,55,'r']]],
  ['綠／青茶', [['蘭香綠茶',30,35,''],['四季青茶',30,35,''],['冬瓜綠/青茶',30,35,'f',GT],['梅子綠茶',35,40,''],['微檸檬綠/青茶',40,45,'f',GT],['重檸檬綠/青茶',45,55,'f',GT],['多多綠/青茶',45,55,'',GT],['鮮奶綠/青茶',50,55,'',GT],['蜜桃綠茶',40,50,''],['葡萄柚綠',45,55,'']]],
  ['仙甘／冬瓜', [['古早味冬瓜茶',30,35,'f'],['仙草甘茶',30,35,'f'],['仙草甘冬瓜',30,35,'rf'],['椰果冬瓜茶',40,45,'f'],['微檸檬冬瓜',40,45,'rf'],['重檸檬冬瓜',45,55,'f'],['鮮奶仙甘/冬瓜',50,55,'f','仙甘|冬瓜'],['豆漿冬瓜',40,50,'f']]],
  ['麥茶', [['麥仔茶',30,35,''],['麥香紅茶',30,35,''],['麥香冬瓜',30,35,'rf'],['麥香豆漿',40,50,''],['麥香鮮奶',50,55,'']]],
  ['奶茶', [['奶茶/綠/青',40,50,'','奶茶|奶綠|奶青'],['波霸奶茶',50,60,'p'],['椰果奶茶',50,60,''],['布丁奶茶',55,65,''],['仙草凍奶茶',50,60,''],['海鹽焦糖奶茶',50,60,'r'],['奶茶三兄弟',65,'','rp']]],
  ['鐵觀音', [['鐵觀音',30,35,''],['鐵觀音奶茶',40,50,''],['鐵觀音豆漿',40,50,''],['鐵觀音鮮奶',50,55,'']]],
  ['厚奶', [['厚奶紅茶',50,60,'r'],['厚奶綠/青茶',50,60,'',GT],['厚奶麥茶',50,60,''],['厚奶仙甘/冬瓜',50,60,'','仙甘|冬瓜'],['厚奶鐵觀音',50,60,'']]],
  ['柳橙', [['鮮橙紅茶',55,65,''],['鮮橙綠/青茶',55,65,'r',GT],['鮮橙冬瓜',55,65,'f'],['柳橙多多綠',65,75,'']]],
  ['蜂蜜', [['蜜茶',35,'',''],['蜂蜜檸檬',45,'',''],['蜂蜜紅茶',40,'',''],['蜂蜜綠/青',40,'','',GT],['蜂蜜奶茶',50,'',''],['蜂蜜檸檬蘆薈',55,'','r']]],
  ['特調', [['黑糖奶茶',45,'','f'],['可可亞',50,'',''],['阿華田',50,'',''],['柚子茶',50,'','f']]],
  ['熱飲', [['桂圓茶',45,'','fh'],['黑糖薑茶',45,'','fh'],['薑汁桂圓',45,'','fh'],['薑汁/桂圓奶茶',50,'','fh','薑汁|桂圓'],['薑汁/桂圓豆漿',50,'','fh','薑汁|桂圓'],['薑汁/桂圓鮮奶',55,'','fh','薑汁|桂圓']]]
];
function defaultMenu() {
  var rows = [], n = 0;
  DEFAULT_MENU_SRC.forEach(function (c) {
    c[1].forEach(function (it) {
      n++;
      rows.push({ id: 'm' + n, cat: c[0], name: it[0], L: it[1], XL: it[2], aL: '', aXL: '', flags: it[3] || '', bases: it[4] || '', on: 'true', sort: n });
    });
  });
  return rows;
}
var DEFAULT_CONFIG = {
  adminPin: '0000',
  shop: '紅茶大苑 國鼎店', lineUrl: 'https://line.me/R/ti/p/@059kotda', shopPhone: '0916-014-100',
  deliveryContact: '馥瑋二哥 0976846330', deliveryMin: 500,
  timeNormal: '11:30', timePearl: '12:30',
  tops: '珍珠:10,蘆薈:10,椰果:10,仙草:10,寒天:15,布丁:15'
};
var DEFAULT_LOCATION = '國泰1F取餐（無上樓服務）｜桃園區中山路845號1F';
function defaultActivities() {
  return [
    { id: 'a1', name: '綜藝大賞', start: '2026-10-05', end: '2026-10-17', sponsor: '老闆贊助', budget: 2000, pickupRate: 0.8, deliveryRate: 0.9, useAct: 'true', location: DEFAULT_LOCATION, note: '老闆妹妹', leaderPin: '1234', status: 'active', createdAt: 1 },
    { id: 'a2', name: '日常團購', start: '', end: '', sponsor: '', budget: 0, pickupRate: 1, deliveryRate: 1, useAct: 'true', location: DEFAULT_LOCATION, note: '', leaderPin: '5678', status: 'active', createdAt: 2 }
  ];
}
var TABLES = {
  menu: ['id', 'cat', 'name', 'L', 'XL', 'aL', 'aXL', 'flags', 'bases', 'on', 'sort'],
  activities: ['id', 'name', 'start', 'end', 'sponsor', 'budget', 'pickupRate', 'deliveryRate', 'useAct', 'location', 'note', 'leaderPin', 'status', 'createdAt'],
  sessions: ['id', 'activityId', 'leader', 'date', 'title', 'mode', 'time', 'deadline', 'budget', 'note', 'status', 'createdAt', 'paidMode', 'paidAmount', 'paidAt'],
  orders: ['id', 'sessionId', 'name', 'device', 'itemId', 'item', 'base', 'size', 'sugar', 'ice', 'tops', 'qty', 'note', 'unit', 'unitAct', 'createdAt']
};

function num(v, d) { var x = parseFloat(v); return isNaN(x) ? (d === undefined ? 0 : d) : x; }
function uid(p) { return p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function topsMap(cfg) {
  var m = {};
  String(cfg.tops || '').split(',').forEach(function (s) { var p = s.split(':'); if (p[0] && p[0].trim()) m[p[0].trim()] = num(p[1]); });
  return m;
}
// unit = 原價；unitAct = 店家優惠價（沒有就等於原價）
function priceOf(menuRow, size, tops, cfg) {
  var tm = topsMap(cfg), add = 0;
  (tops || []).forEach(function (t) { add += tm[t] || 0; });
  var xl = size === 'XL' && num(menuRow.XL) > 0;
  var unit = num(xl ? menuRow.XL : menuRow.L) + add;
  var act = xl ? num(menuRow.aXL) : num(menuRow.aL);
  return { unit: unit, unitAct: act > 0 ? act + add : unit };
}
function stripPins(o) { var c = {}; for (var k in o) if (k !== 'adminPin' && k !== 'leaderPin') c[k] = o[k]; return c; }
// 回傳 {admin:bool, acts:[可管理的活動 id]}
function access(store, pin) {
  pin = String(pin || '').trim();
  if (!pin) return { admin: false, acts: [] };
  if (pin === String(store.config.adminPin)) return { admin: true, acts: store.activities.map(function (a) { return a.id; }) };
  return { admin: false, acts: store.activities.filter(function (a) { return String(a.leaderPin) === pin; }).map(function (a) { return a.id; }) };
}
function needAdmin(store, req) { if (!access(store, req.pin).admin) throw new Error('管理密碼不正確'); }
function needLeader(store, req, activityId) {
  var ac = access(store, req.pin);
  if (!ac.admin && ac.acts.indexOf(activityId) < 0) throw new Error('負責人密碼不正確，或不是這個活動的負責人');
}
function findBy(list, id, msg) {
  for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
  throw new Error(msg);
}
function hhmm(t) { return /^\d{1,2}:\d{2}$/.test(String(t || '')) ? ('0' + t).slice(-5) : ''; }
// 一張單的金額：raw 原價合計、act 套用優惠價合計、pick 自取應付、deli 外送應付
// 自取：有優惠價的品項直接用優惠價、不再打折；沒有優惠價的品項才乘自取折扣
function calc(orders, act) {
  var useAct = String(act.useAct) !== 'false', rate = num(act.pickupRate, 1), raw = 0, sum = 0, pick = 0, cups = 0;
  orders.forEach(function (o) {
    var q = num(o.qty, 1), u = num(o.unit), ua = num(o.unitAct || o.unit), promo = useAct && ua < u;
    raw += u * q; sum += (promo ? ua : u) * q; pick += promo ? ua * q : u * q * rate; cups += q;
  });
  return { raw: raw, act: sum, cups: cups, pick: Math.round(pick), deli: Math.round(raw * num(act.deliveryRate, 1)) };
}
// 活動已結帳用掉的金額（可排除某一張單）
function actUsed(sessions, actId, exceptId) {
  var used = 0, n = 0;
  sessions.forEach(function (s) { if (s.activityId === actId && s.status === 'done' && s.id !== exceptId) { used += num(s.paidAmount); n++; } });
  return { used: used, count: n };
}

// store = {config, menu, activities, sessions, orders}；回傳 {ok, ..., _dirty:[表名]}
function handle(store, req) {
  var a = req.action, cfg = store.config;
  if (a === 'state') {
    var ss = store.sessions.slice().sort(function (x, y) { return String(y.date + y.createdAt).localeCompare(String(x.date + x.createdAt)); }).slice(0, 60);
    var ids = {}; ss.forEach(function (s) { ids[s.id] = 1; });
    return {
      ok: true, config: stripPins(cfg), menu: store.menu,
      activities: store.activities.map(stripPins), sessions: ss,
      orders: store.orders.filter(function (o) { return ids[o.sessionId]; }), now: Date.now()
    };
  }
  if (a === 'checkPin') {
    var ac = access(store, req.pin);
    if (!ac.admin && !ac.acts.length) throw new Error('密碼不正確');
    return { ok: true, admin: ac.admin, acts: ac.acts };
  }

  if (a === 'addOrder') {
    var s = findBy(store.sessions, req.sessionId, '找不到這張單');
    if (s.status !== 'open') throw new Error('這張單已經截止，請找負責人');
    var name = String(req.name || '').trim().slice(0, 20);
    if (!name) throw new Error('請填名字');
    var added = [], tm = topsMap(cfg);
    (req.items || []).slice(0, 20).forEach(function (it) {
      var m = null; store.menu.forEach(function (r) { if (r.id === it.itemId) m = r; });
      if (!m || String(m.on) === 'false') throw new Error('品項已下架：' + (it.item || ''));
      var size = it.size === 'XL' && num(m.XL) > 0 ? 'XL' : 'L';
      var rawTops = Array.isArray(it.tops) ? it.tops : String(it.tops || '').split(/[、,]/);
      var tops = rawTops.map(function (t) { return String(t).trim(); }).filter(function (t) { return tm[t] !== undefined; });
      var p = priceOf(m, size, tops, cfg);
      var row = {
        id: uid('o'), sessionId: s.id, name: name, device: String(req.device || ''), itemId: m.id, item: m.name,
        base: String(it.base || ''), size: size, sugar: String(it.sugar || ''), ice: String(it.ice || ''),
        tops: tops.join('、'), qty: Math.max(1, Math.min(20, Math.round(num(it.qty, 1)))), note: String(it.note || '').slice(0, 40),
        unit: p.unit, unitAct: p.unitAct, createdAt: Date.now()
      };
      store.orders.push(row); added.push(row);
    });
    return { ok: true, added: added, _dirty: ['orders'] };
  }
  if (a === 'deleteOrder') {
    var idx = -1; store.orders.forEach(function (o, i) { if (o.id === req.id) idx = i; });
    if (idx < 0) return { ok: true };
    var o = store.orders[idx], s1 = findBy(store.sessions, o.sessionId, '找不到這張單');
    if (req.pin) {
      needLeader(store, req, s1.activityId);
      if (s1.status === 'done') throw new Error('這張單已結帳，要先「取消結帳」才能修改');
    }
    else {
      if (!req.device || o.device !== req.device) throw new Error('只能刪除自己這支手機點的飲料');
      if (s1.status !== 'open') throw new Error('已截止，請找負責人修改');
    }
    store.orders.splice(idx, 1);
    return { ok: true, _dirty: ['orders'] };
  }

  if (a === 'createSession' || a === 'updateSession') {
    var d = req.data || {}, isNew = a === 'createSession';
    var s2 = isNew ? null : findBy(store.sessions, req.id, '找不到這張單');
    var actId = isNew ? d.activityId : s2.activityId;
    var act = findBy(store.activities, actId, '請選活動');
    needLeader(store, req, act.id);
    if (d.time !== undefined) {
      var t = hhmm(d.time);
      if (t && t < hhmm(cfg.timeNormal)) throw new Error('取餐時間最早 ' + cfg.timeNormal);
      d.time = t;
    }
    if (isNew) {
      if (!d.date) throw new Error('請選日期');
      if (!String(d.leader || '').trim()) throw new Error('請填負責人名字');
      s2 = { id: uid('s'), activityId: act.id, status: 'open', createdAt: Date.now(), budget: '', note: act.note || '', mode: '', title: '', time: '', deadline: '', leader: '', date: '', paidMode: '', paidAmount: '', paidAt: '' };
      store.sessions.push(s2);
    }
    ['leader', 'date', 'title', 'time', 'deadline', 'note'].forEach(function (k) { if (d[k] !== undefined) s2[k] = String(d[k]).slice(0, 40); });
    if (d.mode !== undefined) {
      if (s2.status === 'done') throw new Error('已結帳，要先「取消結帳」才能改取餐方式');
      s2.mode = d.mode === 'delivery' || d.mode === 'pickup' ? d.mode : '';
    }
    if (d.status !== undefined) {
      if (d.status === 'done') {
        if (s2.mode !== 'pickup' && s2.mode !== 'delivery') throw new Error('請先選自取或外送');
        var mine = store.orders.filter(function (o) { return o.sessionId === s2.id; });
        if (!mine.length) throw new Error('這張單還沒有人點，不能結帳');
        var cc = calc(mine, act);
        s2.status = 'done'; s2.paidMode = s2.mode; s2.paidAmount = s2.mode === 'delivery' ? cc.deli : cc.pick; s2.paidAt = Date.now();
      } else {
        s2.status = d.status === 'locked' ? 'locked' : 'open';
        s2.paidMode = ''; s2.paidAmount = ''; s2.paidAt = '';
      }
    }
    return { ok: true, session: s2, _dirty: ['sessions'] };
  }
  if (a === 'deleteSession') {
    var s3 = findBy(store.sessions, req.id, '找不到這張單');
    needLeader(store, req, s3.activityId);
    store.sessions = store.sessions.filter(function (s) { return s.id !== req.id; });
    store.orders = store.orders.filter(function (o) { return o.sessionId !== req.id; });
    return { ok: true, _dirty: ['sessions', 'orders'] };
  }

  if (a === 'saveActivity') {
    needAdmin(store, req);
    var v = req.data || {};
    var act2 = v.id ? findBy(store.activities, v.id, '找不到活動') : null;
    if (!act2) { act2 = { id: uid('a'), status: 'active', createdAt: Date.now(), leaderPin: '' }; store.activities.push(act2); }
    if (!String(v.name || act2.name || '').trim()) throw new Error('請填活動名稱');
    ['name', 'start', 'end', 'sponsor', 'location', 'note'].forEach(function (k) { if (v[k] !== undefined) act2[k] = String(v[k]).slice(0, 120); });
    ['budget', 'pickupRate', 'deliveryRate'].forEach(function (k) { if (v[k] !== undefined && v[k] !== '') act2[k] = num(v[k]); });
    if (v.useAct !== undefined) act2.useAct = String(v.useAct) === 'false' ? 'false' : 'true';
    if (v.status !== undefined) act2.status = v.status === 'archived' ? 'archived' : 'active';
    if (v.leaderPin) {
      var pin = String(v.leaderPin).trim();
      if (pin === String(cfg.adminPin)) throw new Error('負責人密碼不能和管理密碼一樣');
      act2.leaderPin = pin;
    }
    if (!act2.leaderPin) throw new Error('請設定這個活動的負責人密碼');
    return { ok: true, activity: stripPins(act2), _dirty: ['activities'] };
  }
  if (a === 'saveMenu') {
    needAdmin(store, req);
    store.menu = (req.menu || []).map(function (r, i) {
      return { id: r.id || uid('m'), cat: String(r.cat || '其他'), name: String(r.name || '').trim(), L: num(r.L), XL: num(r.XL) || '', aL: num(r.aL) || '', aXL: num(r.aXL) || '', flags: String(r.flags || ''), bases: String(r.bases || ''), on: String(r.on) === 'false' ? 'false' : 'true', sort: i + 1 };
    }).filter(function (r) { return r.name && r.L > 0; });
    return { ok: true, _dirty: ['menu'] };
  }
  if (a === 'saveConfig') {
    needAdmin(store, req);
    var c = req.config || {};
    for (var k in DEFAULT_CONFIG) if (c[k] !== undefined && c[k] !== '') cfg[k] = c[k];
    return { ok: true, config: stripPins(cfg), _dirty: ['config'] };
  }
  throw new Error('未知的動作');
}

// ===== Google 試算表連接 =====
// 第一次使用：在 Apps Script 上方選「setup」按執行，會自動建立工作表與預設菜單。
var SHEETS = { config: '設定', menu: '菜單', activities: '活動', sessions: '開單', orders: '訂單' };

function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var store = { config: JSON.parse(JSON.stringify(DEFAULT_CONFIG)), menu: defaultMenu(), activities: defaultActivities(), sessions: [], orders: [] };
  if (ss.getSheetByName(SHEETS.config)) store.config = loadConfig_(ss);
  if (ss.getSheetByName(SHEETS.menu) && loadTable_(ss, 'menu').length) store.menu = loadTable_(ss, 'menu');
  if (ss.getSheetByName(SHEETS.activities) && loadTable_(ss, 'activities').length) store.activities = loadTable_(ss, 'activities');
  if (ss.getSheetByName(SHEETS.sessions)) store.sessions = loadTable_(ss, 'sessions');
  if (ss.getSheetByName(SHEETS.orders)) store.orders = loadTable_(ss, 'orders');
  save_(store, ['config', 'menu', 'activities', 'sessions', 'orders']);
}

function doGet(e) { return out_(run_({ action: 'state' })); }
function doPost(e) {
  var req = {};
  try { req = JSON.parse(e.postData.contents); } catch (err) { return out_({ ok: false, error: '格式錯誤' }); }
  return out_(run_(req));
}
function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function run_(req) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var store = { config: loadConfig_(ss), menu: loadTable_(ss, 'menu'), activities: loadTable_(ss, 'activities'), sessions: loadTable_(ss, 'sessions'), orders: loadTable_(ss, 'orders') };
    var res = handle(store, req);
    if (res._dirty) save_(store, res._dirty);
    delete res._dirty;
    return res;
  } catch (err) {
    return { ok: false, error: String(err && err.message || err) };
  } finally {
    lock.releaseLock();
  }
}

function loadConfig_(ss) {
  var cfg = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
  var sh = ss.getSheetByName(SHEETS.config);
  if (!sh || sh.getLastRow() < 2) return cfg;
  sh.getRange(2, 1, sh.getLastRow() - 1, 2).getDisplayValues().forEach(function (r) { if (r[0]) cfg[r[0]] = r[1]; });
  return cfg;
}
function loadTable_(ss, name) {
  var sh = ss.getSheetByName(SHEETS[name]);
  if (!sh || sh.getLastRow() < 2) return [];
  var cols = TABLES[name];
  return sh.getRange(2, 1, sh.getLastRow() - 1, cols.length).getDisplayValues()
    .filter(function (r) { return r[0]; })
    .map(function (r) { var o = {}; cols.forEach(function (c, i) { o[c] = r[i]; }); return o; });
}
function save_(store, names) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  names.forEach(function (name) {
    var sh = ss.getSheetByName(SHEETS[name]) || ss.insertSheet(SHEETS[name]);
    var rows;
    if (name === 'config') {
      rows = [['項目', '值']];
      for (var k in store.config) rows.push([k, String(store.config[k])]);
    } else {
      var cols = TABLES[name];
      rows = [cols].concat(store[name].map(function (o) { return cols.map(function (c) { return o[c] === undefined || o[c] === null ? '' : String(o[c]); }); }));
    }
    sh.clearContents();
    var rg = sh.getRange(1, 1, rows.length, rows[0].length);
    rg.setNumberFormat('@');
    rg.setValues(rows);
    sh.setFrozenRows(1);
  });
}
