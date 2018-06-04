import * as React from 'react'
import { SettingsContainerProps } from '../../containers/settings-container'
import { PrincipalPointMode1VP, HorizonMode, Axis, ReferenceDistanceUnit } from '../../types/calibration-settings'
import AxisDropdown from './axis-dropdown'
import PanelSpacer from './../common/panel-spacer'
import Dropdown from './../common/dropdown'
import ReferenceDistanceForm from './reference-distance-form'
import FocalLengthForm from './../common/focal-length-form'

export default class SettingsSection1VP extends React.PureComponent<SettingsContainerProps> {
  render() {

    return (
      <div className='panel-section'>
        <div className='panel-row'>
          Principal point
        </div>
        <div className='panel-row'>
          <Dropdown
            options={
              [
                {
                  value: PrincipalPointMode1VP.Default,
                  id: PrincipalPointMode1VP.Default,
                  label: 'Image midpoint'
                },
                {
                  value: PrincipalPointMode1VP.Manual,
                  id: PrincipalPointMode1VP.Manual,
                  label: PrincipalPointMode1VP.Manual
                }
              ]
            }
            selectedOptionId={this.props.calibrationSettings1VP.principalPointMode}
            onChange={(selectedValue: PrincipalPointMode1VP) => {
              this.props.onPrincipalPointModeChange1VP(selectedValue)
            }}
          />
        </div>
        <PanelSpacer />
        <div className='panel-row'>
          Vanishing point axis
        </div>
        <div className='panel-row'>
          <AxisDropdown
            selectedAxis={this.props.calibrationSettings1VP.vanishingPointAxis}
            onChange={(axis: Axis) => {
              this.props.onVanishingPointAxisChange1VP(axis)
            }
            }
          />
        </div>

        <PanelSpacer />
        <div className='panel-row'>
          Reference distance
        </div>

        <ReferenceDistanceForm
          referenceAxis={this.props.calibrationSettings1VP.referenceDistanceAxis}
          referenceDistance={this.props.calibrationSettings1VP.referenceDistance}
          referenceDistanceUnit={this.props.calibrationSettings1VP.referenceDistanceUnit}
          onReferenceAxisChange={(axis: Axis | null) => {
            this.props.onReferenceDistanceAxisChange(this.props.globalSettings.calibrationMode, axis)
          }}
          onReferenceDistanceChange={(distance: number) => {
            this.props.onReferenceDistanceChange(this.props.globalSettings.calibrationMode, distance)
          }}
          onReferenceDistanceUnitChange={(unit: ReferenceDistanceUnit) => {
            this.props.onReferenceDistanceUnitChange(this.props.globalSettings.calibrationMode, unit)
          }}
        />

        <PanelSpacer />
        <div className='panel-row'>
          Camera data
        </div>

        <FocalLengthForm
          cameraData={this.props.calibrationSettings1VP.cameraData}
          absoluteFocalLength={this.props.calibrationSettings1VP.absoluteFocalLength}
          onAbsoluteFocalLengthChange={this.props.onAbsoluteFocalLengthChange1VP}
          onCameraPresetChange={(cameraPreset: string | null) => {
            this.props.onCameraPresetChange(this.props.globalSettings.calibrationMode, cameraPreset)
          }}
          onSensorSizeChange={(width: number | undefined, height: number | undefined) => {
            this.props.onSensorSizeChange(this.props.globalSettings.calibrationMode, width, height)
          }}
        />

        <PanelSpacer />
        <div className='panel-row'>
          Up axis
        </div>
        <div className='panel-row'>
          <AxisDropdown
            selectedAxis={Axis.PositiveZ}
            onChange={
              (axis: Axis) => console.log('selected axis ' + axis)
            }
          />
        </div>
        <PanelSpacer />
        <div className='panel-row'>
          Horizon
        </div>
        <div className='panel-row'>
          <Dropdown
            options={
              [
                {
                  value: HorizonMode.Default,
                  id: HorizonMode.Default,
                  label: 'Flat'
                },
                {
                  value: HorizonMode.Manual,
                  id: HorizonMode.Manual,
                  label: HorizonMode.Manual
                }
              ]
            }
            selectedOptionId={this.props.calibrationSettings1VP.horizonMode}
            onChange={(selectedValue: HorizonMode) => {
              this.props.onHorizonModeChange(selectedValue)
            }}
          />
        </div>
      </div>
    )
  }
}