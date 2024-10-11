import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props

  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age">Vaccination By Age</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%" // Centered vertically
            data={vaccinationByAge}
            startAngle={360}
            endAngle={0}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-45" fill="#2d87bb" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="square"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
