import type { VisualType } from "../types";

interface DiagramProps {
  type: VisualType;
}

export function Diagram({ type }: DiagramProps) {
  return (
    <section className={`diagram diagram-${type}`} aria-hidden="true">
      {type === "classical-world" ? <ClassicalWorldDiagram /> : null}
      {type === "warning-signals" ? <WarningSignalsDiagram /> : null}
      {type === "photoelectric" ? <PhotoelectricDiagram /> : null}
      {type === "spectra" ? <SpectraDiagram /> : null}
      {type === "double-slit" ? <DoubleSlitDiagram /> : null}
      {type === "home-vs-lab" ? <HomeVsLabDiagram /> : null}
      {type === "quantum-framework" ? <QuantumFrameworkDiagram /> : null}
      {type === "core-ideas" ? <CoreIdeasDiagram /> : null}
      {type === "everyday-quantum" ? <EverydayQuantumDiagram /> : null}
    </section>
  );
}

function ClassicalWorldDiagram() {
  return (
    <div className="diagram-grid">
      <div className="planet-ring" />
      <div className="diagram-label top-left">траектория</div>
      <div className="diagram-label bottom-right">предсказуемость</div>
      <div className="diagram-core" />
    </div>
  );
}

function WarningSignalsDiagram() {
  return (
    <div className="signals-diagram">
      <div className="signal-column">
        <span>излучение</span>
        <strong>!</strong>
      </div>
      <div className="signal-column">
        <span>свет и металл</span>
        <strong>!</strong>
      </div>
      <div className="signal-column">
        <span>спектры</span>
        <strong>!</strong>
      </div>
    </div>
  );
}

function PhotoelectricDiagram() {
  return (
    <div className="photoelectric-diagram">
      <div className="beam beam-low">
        <span>низкая частота</span>
      </div>
      <div className="beam beam-high">
        <span>высокая частота</span>
      </div>
      <div className="metal-plate" />
      <div className="electron electron-stuck" />
      <div className="electron electron-freed" />
      <div className="diagram-note diagram-note-left">порог не пройден</div>
      <div className="diagram-note diagram-note-right">электрон вылетает</div>
    </div>
  );
}

function SpectraDiagram() {
  return (
    <div className="spectra-diagram">
      <div className="energy-ladder">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="spectral-lines">
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function DoubleSlitDiagram() {
  return (
    <div className="double-slit-diagram">
      <div className="source-dot" />
      <div className="slit-wall">
        <span />
        <span />
      </div>
      <div className="interference-screen">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="diagram-label top-right">без измерения пути</div>
      <div className="measurement-wave" />
    </div>
  );
}

function HomeVsLabDiagram() {
  return (
    <div className="comparison-diagram">
      <div className="comparison-card">
        <p>Дом</p>
        <strong>волновая картина</strong>
        <span>лазер + волос</span>
      </div>
      <div className="comparison-card comparison-card-highlight">
        <p>Лаборатория</p>
        <strong>одиночные кванты</strong>
        <span>путь меняет результат</span>
      </div>
    </div>
  );
}

function QuantumFrameworkDiagram() {
  return (
    <div className="framework-diagram">
      <div className="probability-cloud" />
      <div className="probability-node" />
      <div className="probability-node probability-node-two" />
      <div className="probability-node probability-node-three" />
    </div>
  );
}

function CoreIdeasDiagram() {
  return (
    <div className="ideas-diagram">
      <div className="idea-orbit idea-orbit-one" />
      <div className="idea-orbit idea-orbit-two" />
      <div className="idea-center">состояние</div>
      <div className="diagram-label bottom-left">суперпозиция</div>
      <div className="diagram-label top-right">вероятность</div>
    </div>
  );
}

function EverydayQuantumDiagram() {
  return (
    <div className="everyday-diagram">
      <div className="chip-card">
        <span>транзисторы</span>
      </div>
      <div className="chip-card">
        <span>лазеры</span>
      </div>
      <div className="chip-card">
        <span>материалы</span>
      </div>
      <div className="chip-card">
        <span>мы сами</span>
      </div>
    </div>
  );
}
