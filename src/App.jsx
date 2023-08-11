import { motion, Variants } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

const Card = ({ test }) => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        {test}
      </motion.div>
    </motion.div>
  ) 
}

const strs = [
  "Hello I am Ramanathan!",
  "An Computer Science student at NUS"
]

function App() {
  return strs.map(str => (<Card test={str}/>));
}

export default App;
