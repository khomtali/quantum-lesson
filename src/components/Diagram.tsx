import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import type { VisualType } from "../types";

const DiagramModeContext = createContext(false);

interface DiagramProps {
  type: VisualType;
}

interface DiagramShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

interface DiagramSceneProps {
  children: ReactNode;
  width?: number;
  height?: number;
}

export function Diagram({ type }: DiagramProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <div className="diagram-stack">
        <section className={`diagram diagram-${type}`}>
          <DiagramModeContext.Provider value={false}>
            {renderDiagram(type)}
          </DiagramModeContext.Provider>
        </section>

        <div className="diagram-toolbar">
          <button
            type="button"
            className="diagram-expand-button"
            onClick={() => setIsOpen(true)}
          >
            открыть схему крупно
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          className="diagram-modal"
          role="dialog"
          aria-modal="true"
          aria-label="увеличенная схема"
          onClick={() => setIsOpen(false)}
        >
          <div className="diagram-modal-card" onClick={(event) => event.stopPropagation()}>
            <div className="diagram-modal-actions">
              <button
                type="button"
                className="diagram-expand-button diagram-close-button"
                onClick={() => setIsOpen(false)}
              >
                закрыть
              </button>
            </div>

            <section className={`diagram diagram-${type} diagram-expanded`}>
              <DiagramModeContext.Provider value={true}>
                {renderDiagram(type)}
              </DiagramModeContext.Provider>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
}

function DiagramShell({ title, subtitle, children }: DiagramShellProps) {
  return (
    <div className="diagram-shell">
      <div className="diagram-header">
        <p className="diagram-kicker">схема</p>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

function DiagramScene({ children, width = 560, height = 360 }: DiagramSceneProps) {
  const expanded = useContext(DiagramModeContext);
  const contentRef = useRef<SVGGElement | null>(null);
  const [transform, setTransform] = useState<string>("");

  useLayoutEffect(() => {
    const node = contentRef.current;

    if (!node) {
      return undefined;
    }

    let frameId = 0;
    const updateTransform = () => {
      const box = node.getBBox();

      if (!box.width || !box.height) {
        setTransform("");
        return;
      }

      const paddingX = expanded ? 28 : 18;
      const paddingY = expanded ? 24 : 18;
      const scale = Math.min(
        (width - paddingX * 2) / box.width,
        (height - paddingY * 2) / box.height,
        expanded ? 1.12 : 1
      );
      const tx = (width - box.width * scale) / 2 - box.x * scale;
      const ty = (height - box.height * scale) / 2 - box.y * scale;

      setTransform(`translate(${tx} ${ty}) scale(${scale})`);
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateTransform);
    };

    scheduleUpdate();

    const observer = new ResizeObserver(scheduleUpdate);
    const svg = node.ownerSVGElement;

    if (svg) {
      observer.observe(svg);
    }

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [expanded, height, width]);

  return (
    <svg
      className={`diagram-svg${transform ? " diagram-svg-ready" : ""}`}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g ref={contentRef} transform={transform || undefined}>
        {children}
      </g>
    </svg>
  );
}

function renderDiagram(type: VisualType) {
  if (type === "classical-world") return <ClassicalWorldDiagram />;
  if (type === "warning-signals") return <WarningSignalsDiagram />;
  if (type === "photoelectric") return <PhotoelectricDiagram />;
  if (type === "spectra") return <SpectraDiagram />;
  if (type === "double-slit") return <DoubleSlitDiagram />;
  if (type === "home-vs-lab") return <HomeVsLabDiagram />;
  if (type === "quantum-framework") return <QuantumFrameworkDiagram />;
  if (type === "core-ideas") return <CoreIdeasDiagram />;
  if (type === "everyday-quantum") return <EverydayQuantumDiagram />;
  if (type === "interpretation-boundary") return <InterpretationBoundaryDiagram />;
  if (type === "copenhagen") return <CopenhagenDiagram />;
  if (type === "many-worlds") return <ManyWorldsDiagram />;
  if (type === "bohmian") return <BohmianDiagram />;
  if (type === "modern-options") return <ModernOptionsDiagram />;
  if (type === "big-questions") return <BigQuestionsDiagram />;
  if (type === "buddhist-parallels") return <BuddhistParallelsDiagram />;
  if (type === "no-lies") return <NoLiesDiagram />;
  return <LessonTwoFinaleDiagram />;
}

function ClassicalWorldDiagram() {
  return (
    <DiagramShell
      title="классика работает на больших объектах"
      subtitle="траектория, причина и предсказание ещё живут в одном кадре."
    >
      <DiagramScene>
        <rect x="28" y="46" width="504" height="266" rx="24" className="svg-panel" />
        <line x1="84" y1="274" x2="486" y2="274" className="svg-axis" />
        <line x1="84" y1="274" x2="84" y2="88" className="svg-axis" />
        <path
          d="M102 248 C150 226, 178 194, 218 160 C260 125, 304 102, 356 94 C390 89, 430 95, 472 122"
          className="svg-curve"
        />
        <circle cx="218" cy="160" r="8" className="svg-point-gold" />
        <circle cx="356" cy="94" r="8" className="svg-point-aqua" />
        <path d="M218 160 L218 274 M356 94 L356 274" className="svg-guide" />
        <text x="108" y="304" className="svg-caption">
          время
        </text>
        <text x="42" y="106" className="svg-caption">
          положение
        </text>
        <text x="130" y="122" className="svg-label">
          траектория считается
        </text>
        <text x="314" y="70" className="svg-label">
          будущий ход предсказуем
        </text>
        <text x="160" y="332" className="svg-note">
          для планет, маятников и машин эта логика держится отлично
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function WarningSignalsDiagram() {
  return (
    <DiagramShell
      title="проблемы пришли сразу с трёх сторон"
      subtitle="не одна странность, а серия опытов, где классика начала давать осечку."
    >
      <DiagramScene>
        <rect x="36" y="52" width="150" height="232" rx="20" className="svg-panel" />
        <rect x="205" y="52" width="150" height="232" rx="20" className="svg-panel" />
        <rect x="374" y="52" width="150" height="232" rx="20" className="svg-panel" />

        <text x="58" y="88" className="svg-label">
          нагретые тела
        </text>
        <text x="58" y="116" className="svg-small">
          ожидание:
        </text>
        <text x="58" y="138" className="svg-small">
          гладкий спектр
        </text>
        <text x="58" y="180" className="svg-small">
          факт:
        </text>
        <text x="58" y="202" className="svg-small">
          классика промахнулась
        </text>
        <text x="58" y="242" className="svg-alert">
          сигнал №1
        </text>

        <text x="227" y="88" className="svg-label">
          свет + металл
        </text>
        <text x="227" y="116" className="svg-small">
          ожидание:
        </text>
        <text x="227" y="138" className="svg-small">
          яркость всё решит
        </text>
        <text x="227" y="180" className="svg-small">
          факт:
        </text>
        <text x="227" y="202" className="svg-small">
          ниже порога тишина
        </text>
        <text x="227" y="242" className="svg-alert">
          сигнал №2
        </text>

        <text x="396" y="88" className="svg-label">
          атомы
        </text>
        <text x="396" y="116" className="svg-small">
          ожидание:
        </text>
        <text x="396" y="138" className="svg-small">
          сплошная радуга
        </text>
        <text x="396" y="180" className="svg-small">
          факт:
        </text>
        <text x="396" y="202" className="svg-small">
          только линии
        </text>
        <text x="396" y="242" className="svg-alert">
          сигнал №3
        </text>

        <text x="126" y="324" className="svg-note">
          вместе это уже не шум, а системная поломка старой интуиции
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function PhotoelectricDiagram() {
  return (
    <DiagramShell
      title="фотоэффект: частота решает порог"
      subtitle="яркость увеличивает число фотонов, но не энергию одного фотона."
    >
      <DiagramScene>
        <rect x="36" y="72" width="220" height="212" rx="20" className="svg-panel" />
        <rect x="304" y="72" width="220" height="212" rx="20" className="svg-panel" />

        <text x="62" y="106" className="svg-label">
          низкая частота
        </text>
        <path d="M70 150 H190" className="svg-beam-low" />
        <path d="M70 174 H190" className="svg-beam-low" />
        <rect x="198" y="126" width="16" height="108" rx="8" className="svg-metal" />
        <circle cx="178" cy="180" r="7" className="svg-point-gold" />
        <text x="62" y="248" className="svg-small">
          фотонов может быть много
        </text>
        <text x="62" y="270" className="svg-small">
          но энергии одного не хватает
        </text>

        <text x="330" y="106" className="svg-label">
          высокая частота
        </text>
        <path d="M338 150 H458" className="svg-beam-high" />
        <path d="M338 174 H458" className="svg-beam-high" />
        <rect x="466" y="126" width="16" height="108" rx="8" className="svg-metal" />
        <circle cx="446" cy="180" r="7" className="svg-point-gold" />
        <path d="M438 180 C410 156, 396 138, 382 114" className="svg-emission" />
        <circle cx="378" cy="108" r="7" className="svg-point-aqua" />
        <text x="330" y="248" className="svg-small">
          энергии одного фотона хватает
        </text>
        <text x="330" y="270" className="svg-small">
          электрон вылетает сразу
        </text>

        <text x="100" y="324" className="svg-note">
          вывод: порог задаёт частота, а не просто “сделаем поярче”
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function SpectraDiagram() {
  return (
    <DiagramShell
      title="спектры: у атома разрешены только некоторые уровни"
      subtitle="если бы энергия менялась плавно, спектр не был бы нарезан линиями."
    >
      <DiagramScene>
        <rect x="42" y="60" width="206" height="224" rx="20" className="svg-panel" />
        <rect x="312" y="60" width="206" height="224" rx="20" className="svg-panel" />

        <text x="74" y="96" className="svg-label">
          энергетические уровни
        </text>
        <line x1="96" y1="238" x2="198" y2="238" className="svg-level" />
        <line x1="112" y1="196" x2="214" y2="196" className="svg-level" />
        <line x1="92" y1="154" x2="194" y2="154" className="svg-level" />
        <line x1="120" y1="112" x2="222" y2="112" className="svg-level" />
        <path d="M206 112 L206 154 L194 142" className="svg-arrow" />
        <path d="M180 154 L180 196 L168 184" className="svg-arrow" />
        <text x="74" y="266" className="svg-small">
          переходы идут ступеньками
        </text>

        <text x="344" y="96" className="svg-label">
          спектр из линий
        </text>
        <rect x="352" y="122" width="24" height="108" rx="10" className="svg-line-blue" />
        <rect x="398" y="100" width="24" height="130" rx="10" className="svg-line-gold" />
        <rect x="446" y="138" width="24" height="92" rx="10" className="svg-line-rose" />
        <text x="344" y="266" className="svg-small">
          сплошной радуги нет
        </text>

        <text x="108" y="324" className="svg-note">
          вывод: атом меняет энергию не как угодно, а только по разрешённым шагам
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function DoubleSlitDiagram() {
  return (
    <DiagramShell
      title="две щели: измерение меняет картину"
      subtitle="без контроля пути видим интерференцию, с контролем пути — уже другой рисунок."
    >
      <DiagramScene>
        <rect x="36" y="74" width="220" height="208" rx="20" className="svg-panel" />
        <rect x="304" y="74" width="220" height="208" rx="20" className="svg-panel" />

        <text x="64" y="106" className="svg-label">
          без измерения пути
        </text>
        <circle cx="82" cy="178" r="7" className="svg-point-aqua" />
        <rect x="146" y="120" width="14" height="116" rx="7" className="svg-wall" />
        <rect x="146" y="136" width="14" height="22" rx="7" className="svg-gap" />
        <rect x="146" y="198" width="14" height="22" rx="7" className="svg-gap" />
        <path d="M90 178 C126 158, 132 148, 146 147" className="svg-path-soft" />
        <path d="M90 178 C126 198, 132 208, 146 209" className="svg-path-soft" />
        <rect x="214" y="108" width="14" height="144" rx="7" className="svg-screen" />
        <rect x="219" y="126" width="4" height="12" rx="2" className="svg-band" />
        <rect x="219" y="152" width="4" height="24" rx="2" className="svg-band" />
        <rect x="219" y="190" width="4" height="30" rx="2" className="svg-band" />
        <rect x="219" y="232" width="4" height="10" rx="2" className="svg-band" />
        <text x="64" y="260" className="svg-small">
          полос много: это интерференция
        </text>

        <text x="332" y="106" className="svg-label">
          если пытаться узнать путь
        </text>
        <circle cx="350" cy="178" r="7" className="svg-point-aqua" />
        <rect x="414" y="120" width="14" height="116" rx="7" className="svg-wall" />
        <rect x="414" y="136" width="14" height="22" rx="7" className="svg-gap" />
        <rect x="414" y="198" width="14" height="22" rx="7" className="svg-gap" />
        <circle cx="398" cy="148" r="6" className="svg-detector" />
        <circle cx="398" cy="208" r="6" className="svg-detector" />
        <path d="M358 178 C388 162, 398 154, 414 147" className="svg-path-hard" />
        <path d="M358 178 C388 194, 398 202, 414 209" className="svg-path-hard" />
        <rect x="482" y="108" width="14" height="144" rx="7" className="svg-screen" />
        <rect x="487" y="144" width="4" height="34" rx="2" className="svg-band" />
        <rect x="487" y="192" width="4" height="34" rx="2" className="svg-band" />
        <text x="332" y="260" className="svg-small">
          рисунок упрощается: путь уже вмешался
        </text>

        <text x="92" y="324" className="svg-note">
          вывод: вопрос “через какую щель?” сам меняет физическую ситуацию
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function HomeVsLabDiagram() {
  return (
    <DiagramShell
      title="домашняя версия и лабораторная — это разный уровень контроля"
      subtitle="дома видна волна, в лаборатории начинается настоящий квантовый нерв."
    >
      <div className="diagram-compare-grid">
        <div className="diagram-compare-card">
          <p className="diagram-compare-kicker">дома</p>
          <h4>видим интерференцию света</h4>
          <ul>
            <li>лазер + волос или узкая щель</li>
            <li>светлые и тёмные полосы на стене</li>
            <li>волновая картина читается глазами</li>
          </ul>
        </div>
        <div className="diagram-compare-card diagram-compare-card-highlight">
          <p className="diagram-compare-kicker">в лаборатории</p>
          <h4>контролируем одиночные кванты</h4>
          <ul>
            <li>фотоны или электроны летят почти по одному</li>
            <li>отдельные попадания постепенно собирают рисунок</li>
            <li>измерение пути меняет результат</li>
          </ul>
        </div>
      </div>
    </DiagramShell>
  );
}

function QuantumFrameworkDiagram() {
  return (
    <DiagramShell
      title="квантовая механика как рабочая схема"
      subtitle="не про “что там красиво происходит”, а про то, что можно посчитать и проверить."
    >
      <DiagramScene>
        <rect x="44" y="126" width="118" height="84" rx="18" className="svg-panel" />
        <rect x="220" y="126" width="118" height="84" rx="18" className="svg-panel" />
        <rect x="396" y="126" width="118" height="84" rx="18" className="svg-panel" />
        <path d="M162 168 H220" className="svg-arrow-line" />
        <path d="M338 168 H396" className="svg-arrow-line" />
        <text x="72" y="156" className="svg-label">
          эксперимент
        </text>
        <text x="72" y="182" className="svg-small">
          что мы реально ставим
        </text>
        <text x="250" y="156" className="svg-label">
          состояние
        </text>
        <text x="238" y="182" className="svg-small">
          матем. описание системы
        </text>
        <text x="424" y="156" className="svg-label">
          вероятности
        </text>
        <text x="414" y="182" className="svg-small">
          какие исходы возможны
        </text>
        <text x="116" y="306" className="svg-note">
          теория нужна затем, чтобы связать установку и статистику результатов
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function CoreIdeasDiagram() {
  return (
    <DiagramShell
      title="базовые идеи в одном кадре"
      subtitle="не орнамент, а опорные понятия, без которых дальше всё расплывётся."
    >
      <DiagramScene>
        <circle cx="280" cy="176" r="56" className="svg-core-node" />
        <text x="246" y="170" className="svg-core-label">
          состояние
        </text>
        <text x="227" y="194" className="svg-core-small">
          что описываем
        </text>

        <rect x="70" y="74" width="138" height="70" rx="16" className="svg-panel" />
        <rect x="352" y="74" width="138" height="70" rx="16" className="svg-panel" />
        <rect x="70" y="224" width="138" height="70" rx="16" className="svg-panel" />
        <rect x="352" y="224" width="138" height="70" rx="16" className="svg-panel" />

        <path d="M208 144 L244 160" className="svg-arrow-line" />
        <path d="M352 144 L316 160" className="svg-arrow-line" />
        <path d="M208 248 L244 196" className="svg-arrow-line" />
        <path d="M352 248 L316 196" className="svg-arrow-line" />

        <text x="92" y="104" className="svg-label">
          волновая функция
        </text>
        <text x="92" y="126" className="svg-small">
          считает вероятности
        </text>

        <text x="382" y="104" className="svg-label">
          суперпозиция
        </text>
        <text x="380" y="126" className="svg-small">
          несколько вкладов сразу
        </text>

        <text x="104" y="254" className="svg-label">
          измерение
        </text>
        <text x="90" y="276" className="svg-small">
          физическое взаимодействие
        </text>

        <text x="376" y="254" className="svg-label">
          неопределённость
        </text>
        <text x="372" y="276" className="svg-small">
          не всё задаётся вместе
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function EverydayQuantumDiagram() {
  return (
    <DiagramShell
      title="квантовый слой доезжает до повседневности"
      subtitle="от атома до ноутбука — цепочка длинная, но вполне земная."
    >
      <DiagramScene>
        <rect x="42" y="136" width="94" height="82" rx="18" className="svg-panel" />
        <rect x="170" y="136" width="94" height="82" rx="18" className="svg-panel" />
        <rect x="298" y="136" width="94" height="82" rx="18" className="svg-panel" />
        <rect x="426" y="136" width="94" height="82" rx="18" className="svg-panel" />
        <path d="M136 177 H170 M264 177 H298 M392 177 H426" className="svg-arrow-line" />
        <text x="70" y="168" className="svg-label">
          атомы
        </text>
        <text x="60" y="192" className="svg-small">
          устойчивость
        </text>
        <text x="188" y="168" className="svg-label">
          связи
        </text>
        <text x="184" y="192" className="svg-small">
          химия
        </text>
        <text x="318" y="168" className="svg-label">
          материалы
        </text>
        <text x="318" y="192" className="svg-small">
          полупроводники
        </text>
        <text x="444" y="168" className="svg-label">
          техника
        </text>
        <text x="438" y="192" className="svg-small">
          чипы, лазеры, led
        </text>
        <text x="124" y="306" className="svg-note">
          квантмех важен не потому, что странный. а потому, что без него не собирается быт
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function InterpretationBoundaryDiagram() {
  return (
    <DiagramShell
      title="одна математика, несколько чтений"
      subtitle="данные общие. спор идёт о том, что считать реальностью за этими данными."
    >
      <DiagramScene>
        <rect x="58" y="126" width="126" height="84" rx="18" className="svg-panel" />
        <rect x="218" y="126" width="126" height="84" rx="18" className="svg-panel" />
        <rect x="378" y="86" width="118" height="54" rx="16" className="svg-panel" />
        <rect x="378" y="154" width="118" height="54" rx="16" className="svg-panel" />
        <rect x="378" y="222" width="118" height="54" rx="16" className="svg-panel" />
        <path d="M184 168 H218" className="svg-arrow-line" />
        <path d="M344 168 H378 M344 168 L378 113 M344 168 L378 249" className="svg-arrow-line" />
        <text x="82" y="160" className="svg-label">эксперимент</text>
        <text x="80" y="184" className="svg-small">факты и результаты</text>
        <text x="242" y="160" className="svg-label">теория</text>
        <text x="232" y="184" className="svg-small">формулы работают</text>
        <text x="402" y="118" className="svg-small">копенгаген</text>
        <text x="398" y="186" className="svg-small">многомировая</text>
        <text x="390" y="254" className="svg-small">бомианская</text>
        <text x="130" y="320" className="svg-note">
          интерпретации спорят о смысле, а не о том, сработал ли эксперимент
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function CopenhagenDiagram() {
  return (
    <DiagramShell
      title="копенгаген: не дорисовывай лишнее"
      subtitle="теория нужна, чтобы считать результаты измерения, а не обязательно рисовать скрытый фильм между ними."
    >
      <DiagramScene>
        <rect x="62" y="88" width="174" height="186" rx="20" className="svg-panel" />
        <rect x="324" y="88" width="174" height="186" rx="20" className="svg-panel" />
        <text x="88" y="126" className="svg-label">что берём всерьёз</text>
        <text x="88" y="156" className="svg-small">состояние системы</text>
        <text x="88" y="180" className="svg-small">правила вероятностей</text>
        <text x="88" y="204" className="svg-small">измерение и результат</text>
        <text x="350" y="126" className="svg-label">что не обещаем</text>
        <text x="350" y="156" className="svg-small">уютную классическую</text>
        <text x="350" y="180" className="svg-small">историю “что было”</text>
        <text x="350" y="204" className="svg-small">между измерениями</text>
        <text x="120" y="320" className="svg-note">
          выигрыш: дисциплина. цена: меньше онтологического комфорта
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function ManyWorldsDiagram() {
  return (
    <DiagramShell
      title="многомировая: коллапса нет, ветвление есть"
      subtitle="волновая функция развивается дальше, а возможные исходы расходятся по разным ветвям."
    >
      <DiagramScene>
        <path d="M104 182 H238" className="svg-arrow-line" />
        <path d="M238 182 C286 182, 314 154, 372 112" className="svg-arrow-line" />
        <path d="M238 182 C286 182, 314 182, 372 182" className="svg-arrow-line" />
        <path d="M238 182 C286 182, 314 210, 372 252" className="svg-arrow-line" />
        <circle cx="92" cy="182" r="12" className="svg-point-aqua" />
        <circle cx="238" cy="182" r="12" className="svg-point-gold" />
        <circle cx="384" cy="112" r="10" className="svg-point-aqua" />
        <circle cx="384" cy="182" r="10" className="svg-point-aqua" />
        <circle cx="384" cy="252" r="10" className="svg-point-aqua" />
        <text x="72" y="154" className="svg-small">до измерения</text>
        <text x="216" y="154" className="svg-small">разветвление</text>
        <text x="400" y="116" className="svg-small">исход 1</text>
        <text x="400" y="186" className="svg-small">исход 2</text>
        <text x="400" y="256" className="svg-small">исход 3</text>
        <text x="116" y="320" className="svg-note">
          выигрыш: не нужен отдельный коллапс. цена: онтология становится очень широкой
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function BohmianDiagram() {
  return (
    <DiagramShell
      title="де бройль — бом: частица + направляющая волна"
      subtitle="траектория возвращается, но картинка мира перестаёт быть локально невинной."
    >
      <DiagramScene>
        <path d="M70 210 C140 164, 202 148, 272 180 C324 204, 382 202, 462 134" className="svg-path-hard" />
        <path d="M60 142 C150 102, 236 100, 332 132 C392 152, 438 150, 492 122" className="svg-path-soft" />
        <path d="M60 258 C146 218, 236 216, 332 248 C392 268, 440 266, 494 236" className="svg-path-soft" />
        <circle cx="70" cy="210" r="10" className="svg-point-gold" />
        <circle cx="462" cy="134" r="10" className="svg-point-gold" />
        <text x="94" y="128" className="svg-small">волна направляет</text>
        <text x="78" y="236" className="svg-small">частица идёт по траектории</text>
        <text x="118" y="320" className="svg-note">
          выигрыш: траектория есть. цена: локальность мира уже не выглядит простой
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function ModernOptionsDiagram() {
  return (
    <DiagramShell
      title="другие версии двигают боль в разные места"
      subtitle="коллапс, отношения, агент — разные способы не свалиться в старую картину мира."
    >
      <div className="diagram-compare-grid">
        <div className="diagram-compare-card">
          <p className="diagram-compare-kicker">объективный коллапс</p>
          <h4>схлопывание реально в природе</h4>
          <ul>
            <li>не только в описании результата</li>
            <li>коллапс получает физический статус</li>
          </ul>
        </div>
        <div className="diagram-compare-card">
          <p className="diagram-compare-kicker">реляционная</p>
          <h4>свойства зависят от отношения</h4>
          <ul>
            <li>контекст взаимодействия важен</li>
            <li>нет абсолютно одинокого описания</li>
          </ul>
        </div>
        <div className="diagram-compare-card diagram-compare-card-highlight">
          <p className="diagram-compare-kicker">qbism</p>
          <h4>вероятности как ожидания агента</h4>
          <ul>
            <li>теория помогает действовать</li>
            <li>не обещает голую “карту мира”</li>
          </ul>
        </div>
      </div>
    </DiagramShell>
  );
}

function BigQuestionsDiagram() {
  return (
    <DiagramShell
      title="ключевые вопросы второго урока"
      subtitle="не потому что физики любят туман, а потому что простого ответа без цены не выходит."
    >
      <DiagramScene>
        <circle cx="280" cy="178" r="58" className="svg-core-node" />
        <text x="232" y="182" className="svg-core-label">
          измерение
        </text>
        <path d="M280 120 L280 64 M338 178 H492 M280 236 L280 292 M222 178 H68" className="svg-arrow-line" />
        <text x="232" y="50" className="svg-small">вероятность</text>
        <text x="420" y="170" className="svg-small">реальность</text>
        <text x="246" y="320" className="svg-small">локальность</text>
        <text x="46" y="170" className="svg-small">свойства до наблюдения</text>
        <text x="114" y="320" className="svg-note">
          каждая интерпретация даёт свой пакет ответов на эти узлы
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function BuddhistParallelsDiagram() {
  return (
    <DiagramShell
      title="параллели — это рифмы, а не доказательства"
      subtitle="сравнивать можно пределы интуиции, роль отношений и вопрос независимой сущности."
    >
      <DiagramScene>
        <rect x="60" y="84" width="182" height="188" rx="20" className="svg-panel" />
        <rect x="318" y="84" width="182" height="188" rx="20" className="svg-panel" />
        <text x="126" y="118" className="svg-label">буддизм</text>
        <text x="86" y="154" className="svg-small">нет твёрдой отдельной сущности</text>
        <text x="86" y="182" className="svg-small">отношения и взаимозависимость</text>
        <text x="86" y="210" className="svg-small">обыденная интуиция ненадёжна</text>
        <text x="380" y="118" className="svg-label">квантмех</text>
        <text x="344" y="154" className="svg-small">свойства не всегда даны классически</text>
        <text x="344" y="182" className="svg-small">контекст измерения важен</text>
        <text x="344" y="210" className="svg-small">старый реализм трещит</text>
        <text x="120" y="320" className="svg-note">
          сходство есть на уровне удара по наивной картине, не на уровне формул
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function NoLiesDiagram() {
  return (
    <DiagramShell
      title="красивую ложь лучше резать сразу"
      subtitle="иначе на месте физики быстро появляется сувенирный космос."
    >
      <DiagramScene>
        <rect x="54" y="86" width="452" height="194" rx="22" className="svg-panel" />
        <text x="88" y="126" className="svg-label">не надо говорить:</text>
        <text x="88" y="160" className="svg-small">“квантмех доказал буддизм”</text>
        <text x="88" y="188" className="svg-small">“сознание силой мысли создаёт реальность”</text>
        <text x="88" y="216" className="svg-small">“аналогия = научный вывод”</text>
        <path d="M404 150 L470 216 M470 150 L404 216" className="svg-cross" />
        <text x="108" y="320" className="svg-note">
          если после объяснения осталась только магия, а физика исчезла, объяснение было плохим
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}

function LessonTwoFinaleDiagram() {
  return (
    <DiagramShell
      title="общий нерв второго урока"
      subtitle="и квантмех, и буддизм могут выбивать подпорки из наивной уверенности, но они не становятся одним и тем же."
    >
      <DiagramScene>
        <rect x="74" y="122" width="144" height="92" rx="18" className="svg-panel" />
        <rect x="342" y="122" width="144" height="92" rx="18" className="svg-panel" />
        <circle cx="280" cy="168" r="44" className="svg-core-node" />
        <path d="M218 168 H236 M324 168 H342" className="svg-arrow-line" />
        <text x="110" y="160" className="svg-label">буддизм</text>
        <text x="98" y="184" className="svg-small">традиция практики и мысли</text>
        <text x="366" y="160" className="svg-label">квантмех</text>
        <text x="354" y="184" className="svg-small">физическая теория</text>
        <text x="248" y="162" className="svg-core-label">
          удар
        </text>
        <text x="226" y="186" className="svg-core-small">
          по наивной уверенности
        </text>
        <text x="116" y="320" className="svg-note">
          рифма есть. тождество — нет. и именно это делает разговор честным
        </text>
      </DiagramScene>
    </DiagramShell>
  );
}
